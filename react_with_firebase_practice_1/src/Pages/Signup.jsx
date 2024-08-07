import React, { useEffect, useState } from 'react'
import "./Signup.modules.css"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../Firebase/firebase"


const obj = {
    fname : "",
    lname : "",
    email : "",
    password : ""
}

function Signup() {
    const [state,setState] = useState(obj) 
    const [arr,setArr] = useState([]);

    const [dataShow,setDataShow] = useState(true)
    const [chnageBtn,setChangeBtn] = useState(null)
    
    const userCollection = collection(db,"registerUser")

    

    const handleChange = (e)=>{
        let {name,value} = e.target;
        setState({...state,[name]: value})
    }
    

    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        if(chnageBtn != null)
        {
            const updated = doc(db,"registerUser",chnageBtn)

            await updateDoc(updated,state)
            alert("Data Updated Successfully...")
        }
        else{
            await addDoc(userCollection,state)
            alert("Data Register Successfully....")
            
        }
        

        
        setState(obj)
        setDataShow(false)
        getData()
    }

    const getData = async()=>{
        let data = await getDocs(userCollection);
        // console.log(data);

        let arr = data.docs.map((val)=>{
            return{id : val.id,...val.data()}
        })
        console.log(arr);
        setArr(arr);
        
    }
    useEffect(()=>{
        getData()
    },[])

    const handleDelete = async(id)=>{
        console.log(id)
        const deleteData = doc(db,"registerUser",id)
        await deleteDoc(deleteData)
        alert(`${deleteData.id} Your Data Deleted Syccessfully...`)
        getData()
    }

    const handleEdit = (id)=>{
        setDataShow(true)
        console.log(id);
        setChangeBtn(id)

        arr.forEach((val)=>{
            if(val.id == id)
            {
                setState(val)
            }
        })
        
    }






    
    
  return (
    dataShow ? <div className="container">
    <div className="login-box">
        <h1>Sign-Up</h1>
        <form onSubmit={handleSubmit}>
            <div className="textbox">
                <label htmlFor="email">First Name</label>
                <input type="text" id="fname" name="fname" placeholder="Enter your First Name" value={state.fname} required onChange={handleChange} />
            </div>
            <div className="textbox">
                <label htmlFor="email">Last Name</label>
                <input type="text" id="lname" name="lname" placeholder="Enter your Last Name" value={state.lname} required onChange={handleChange} />
            </div>
            <div className="textbox">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" value={state.email} required onChange={handleChange} />
            </div>
            <div className="textbox">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" value={state.password} required onChange={handleChange} />
            </div>
            <input type="submit" className='btn' value={chnageBtn != null ? "Update" : "Submit"}/>
            
            <br /><br /><br />
            
        </form>
        
        <button className="btn" style={{backgroundColor:"red"}} onClick={()=>setDataShow(false)}>Show Register Data</button>
    </div>
</div> : <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <table border={1} style={{textAlign:"center",width:"800px"}}>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th colSpan={2}>Action</th>
            </tr>
            {
                arr.map((val)=>{
                    return(
                        <tr key={val.id}>
                            <td>{val.fname}</td>
                            <td>{val.lname}</td>
                            <td>{val.email}</td>
                            <td><button onClick={()=>handleEdit(val.id)}>Edit</button></td>
                            <td><button onClick={()=>handleDelete(val.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
       
        <button style={{marginTop:"50px",width:"170px",height:"40px",backgroundColor:"dodgerblue",border:"none",color:"white",fontWeight:"bold"}} onClick={()=>setDataShow(true)}>Back To Home</button>
    </div>
  )
}

export default Signup