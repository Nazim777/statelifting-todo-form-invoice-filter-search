import React,{useState} from 'react'
import Layout from '../../components/ChildrenProps/Layout'
import StateLiftingAbout from '../../components/StateLifting/StateLiftingAbout'
import shortid from 'shortid'
import ShowTodos from './ShowTodos'


const About = () => {
  const [todo,setTodo] = useState([])
  const userTodos = (data) =>{
   const userData = {
    text: data,
    id: shortid.generate(),
    createdAT : new Date(),
    isCompleted:false
   }
   setTodo([userData,...todo])
  }
  console.log(todo)
  return (
    <div>
        <Layout>
           <h1>hello this is a about page</h1>
           <StateLiftingAbout userTodos= {userTodos}/>
           <ShowTodos todo={todo}/>


        </Layout>
      
    </div>
  )
}

export default About
