import React,{useState} from 'react'

const StateLiftingAbout = ({userTodos}) => {
   const [data,setData] =useState('')
   const handleClick= ()=>{
   if(data){
    userTodos(data)
    setData('')
   }else{
    window.alert('invalid input')
   }

   }
  return (
    <div>
      <form action="" onSubmit={(e)=>e.preventDefault()}>
      <input type="text" placeholder='enter your todo' value={data} onChange={(e)=>setData(e.target.value)} /> <br />
        <button type='submit' onClick={handleClick} className='btn btn-success my-4'>submit</button>
      </form>
      
    </div>
  )
}

export default StateLiftingAbout

