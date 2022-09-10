import React,{useState} from 'react'


const inputList = {
    name:'',
    email:'',
    group:''
}

const ContactForm = ({getContact}) => {
    const [input,setInput] = useState({...inputList})
    const handlechage= (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        getContact(input)
        setInput({...inputList})
    }
    
  return (
    <div>
        <h1>crate contact list</h1>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' id='name' placeholder='enter your name' value={input.name}  onChange={handlechage} /> <br /> <br />
            <label htmlFor="email">email:</label>
            <input type="text" name='email' id='email' placeholder='enter your email' value={input.email} onChange={handlechage}/> <br /> <br />
            <label htmlFor="group">group:</label> 
            <select name="group" id="group" value={input.group} onChange={handlechage}> <br />
                <option value=" ">select options</option>
                <option value="home">home</option>
                <option value="office">office</option>
            </select>
            <button type='submit'>create contactlist</button>
        </form>
      
      
    </div>
  )
}

export default ContactForm
