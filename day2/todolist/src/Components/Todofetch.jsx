


function Todofetch({data})
{
    

    return(
        data.map((val)=>{
            return(
                <div id="fetchsub">
                    <h1>{val.task}</h1>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            )
        })
    )
}

export default Todofetch