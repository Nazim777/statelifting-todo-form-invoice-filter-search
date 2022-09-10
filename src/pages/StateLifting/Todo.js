import React,{useState,useEffect} from 'react'
import CreateTodo from '../../components/StateLifting/CreateTodo'
import shortid from 'shortid'
import ShowTodo from '../../components/StateLifting/ShowTodo'
import Layout from '../../components/ChildrenProps/Layout'

const Todo = () => {
  const [data,setData] =useState([])
  const [visibility,setVisibility] = useState('all')
  
  const Alltodos =(alltodos)=>{
   // console.log(alltodos)
    const userTodos = {
      text: alltodos,
      CreateAt: new Date(),
      id: shortid.generate(),
      isCompleted:false
    }
   setData([userTodos,...data])

  }

  const toggle= (id)=>{
  const toggeledData=  data.map((item)=>{
      if(item.id===id){
        item.isCompleted=!item.isCompleted
      }
      return item
    })
    setData(toggeledData)
 // console.log(id)
  }
  const handleVisibility = (text)=>{
    setVisibility(text)
    
  }
  const filteredTodos = ()=>{
    if(visibility=='completed') return data.filter((item)=>item.isCompleted)
    if(visibility== 'incompleted') return data.filter((item)=>!item.isCompleted)
    return data 
  }

//console.log(data)
  return (
    <div>
      <Layout>
        <h1>hello this is a todo page</h1>
      <CreateTodo Alltodos={Alltodos}/>
      <button className='btn btn-secondary' onClick={()=>handleVisibility('all')}>all</button>
      <button className='btn btn-secondary mx-2' onClick={()=>handleVisibility('completed')}>completed</button>
      <button className='btn btn-secondary' onClick={()=>handleVisibility('incompleted')}>incompleted</button>
      <h4>selected Todos : {visibility}</h4>
      <ShowTodo data= {filteredTodos()} toggle={toggle}/>

      </Layout>
     
      
    </div>
  )
}

export default Todo
