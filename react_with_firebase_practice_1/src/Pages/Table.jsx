import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom';

function Table() {

    const [arr,setArr] = useState([]);
    const navigate = useNavigate()

    const userCollection = collection(db,"registerUser")

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

    const backToHome = ()=>{
        navigate("/")
    }

    const handleDelete = async(id)=>{
        const deleteData = doc(db,"registerUser",id)
        await deleteDoc(deleteData)
        alert(`${deleteData.id} Your Data Deleted Syccessfully...`)
        getData()
    }

    const handleEdit = (id)=>{
        navigate("/",
            {
                state : {id}
            }
        )
        
    }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
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
                            <td><button onClick={()=>handleEdit(val)}>Edit</button></td>
                            <td><button onClick={()=>handleDelete(val.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
       
        <button style={{marginTop:"50px",width:"170px",height:"40px",backgroundColor:"dodgerblue",border:"none",color:"white",fontWeight:"bold"}} onClick={backToHome}>Back To Home</button>
    </div>
  )
}

export default Table