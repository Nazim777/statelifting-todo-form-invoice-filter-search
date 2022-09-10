import React from 'react'


const ShowTodo = ({data,toggle}) => {
    console.log(data)
  return (
    <div>
        {
            data.length>0 ? data.map((item)=>{
                return(
                    < >
                <span key={item.id} style={{  textDecoration:item.isCompleted?'line-through':'none',cursor:'pointer'}} onClick={()=>toggle(item.id)}>{item.text}</span> <br />
                    </>
                )

            }):<><p>no todo to show</p></>
        }
        
      
    </div>
  )
}

export default ShowTodo
