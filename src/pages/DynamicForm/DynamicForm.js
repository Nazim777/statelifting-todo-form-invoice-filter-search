import React,{useState}from 'react'
import Layout from '../../components/ChildrenProps/Layout'
const FormData ={
    name:{
        type:'text',
        label:'what is your name?',
        placeholder:'enter your name'
    },
    email:{
        type:'email',
        label:'what is your email ?',
        placeholder:'enter your email'
    },
    password:{
        type:'password',
        label:'what is your password?',
        placeholder:'enter your password'
    },
    confirm_password:{
        type:'password',
        label:'what is your confirm password?',
        placeholder:'enter confirm password'
    }

}

// add new field on object
const transFormObject = (obj) =>{
 return Object.keys(obj).reduce((accmulator,currentValue)=>{
        accmulator[currentValue]={
            ...obj[currentValue],
            value:''
        }
        return accmulator

    },{})
}

// convert object to array 
const mapObjectToArray = (obj)=>{
 return   Object.keys(obj).map((item)=>({name:item,...obj[item]}))
}






const DynamicForm = () => {
   const [formState, setFormState] = useState(transFormObject(FormData))
   
  // console.log(formState)
   const data = mapObjectToArray(formState)
  // console.log(data)
  const handleSubmit =(e) =>{
    e.preventDefault()
    const values = Object.keys(formState).reduce((accmulator,currentValue)=>{
        accmulator[currentValue] = formState[currentValue].value
        return accmulator

    },{})

    // form value 
   // console.log(values)
   
  }

  const handleChange =(e) =>{
    setFormState({
        ...formState,
        [e.target.name]:{
            ...formState[e.target.name],
            value:e.target.value

        }
    })
  }
    
  return (
    <div>
        <Layout>
            <h1>hello this is form page</h1>

            <form  onSubmit={handleSubmit}>
                {
                    data.length&& data.map((item)=>{
                        return(
                            <>
                            <label>{item.label}</label> <br />
                            <input type={item.type} placeholder={item.placeholder} name={item.name} value={item.value} className='my-2' onChange={handleChange} /> <br />
                            </>
                        )
                    })
                }
                <button  className='btn btn-secondary'>submit</button>
            </form>
        </Layout>
      
    </div>
  )
}

export default DynamicForm
