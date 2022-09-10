import React from 'react'

const ShowTodos = ({todo}) => {
  return (
    <div>
       {
        todo.length>0 ? todo.map((item)=>{
          return(
            <ul>
                <li>{item.text}</li>
                
            </ul>
          )
        })
        :<div className='mt-4'><p>no todo to show</p></div>
       }
      
    </div>
  )
}

export default ShowTodos
