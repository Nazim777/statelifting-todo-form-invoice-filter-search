import React,{useState} from 'react'
import Layout from '../../components/ChildrenProps/Layout'
import ContactForm from './ContactForm'
import Table from './Table'

const Filter = () => {
    const [contacts,setContacts] = useState([])
    const getContact= (contact)=>{
        setContacts([].concat(contacts,contact))

    }

    
  return (
    <div>
        <Layout>
            <ContactForm getContact={getContact}/> <br />
            <Table contacts={contacts}/>
           
        </Layout>
      
    </div>
  )
}

export default Filter
