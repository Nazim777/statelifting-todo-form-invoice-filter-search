import React,{useState,useEffect} from 'react'

const CreateTodo = ({Alltodos}) => {
    const [todo,setTodo] = useState('')
    const handleClick = ()=>{
        if(todo){
          Alltodos(todo)
        setTodo('')
        }else{
          window.alert('invalid input')
        }
    }
  return (
    <div>
        <form action="" onSubmit={(e)=>e.preventDefault() }>
            <input type="text" placeholder='enter your todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/> <br />
            <button className='btn btn-secondary my-4' onClick={handleClick}>Add todo</button>
        </form>

      
    </div>
  )
}

export default CreateTodo
