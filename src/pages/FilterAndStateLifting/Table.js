import React,{useState} from 'react'

const Table = ({contacts}) => {
    const [filter,setFilter] = useState('all')
    const [search,setSearch] = useState('')
    let filteredContact= []
    if(filter==='all'){
      filteredContact = contacts

    }else{
        filteredContact = contacts.filter((item)=>item.group==filter)
    }
    if(search){
       filteredContact= filteredContact.filter((item)=>item.name.includes(search) || item.email.includes(search))
    }

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h1>all contactlist</h1>

        <div>
            <label htmlFor="filter">Filter:</label>
            <select name="" id="filter" value={filter} onChange={(e)=>setFilter(e.target.value)} >
                <option value="all">all</option>
                <option value="">none</option>
                <option value="home">home</option>
                <option value="office">office</option>
            </select>
            <label htmlFor="search">search</label>
            <input type="text"  id='search' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <table>
            <thead>
                <tr>
                    <td>name</td>
                    <td>email</td>
                    <td>group</td>
                </tr>
            </thead>
            <tbody>
            {filteredContact&&filteredContact.map((item)=>(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.group}</td>
                </tr>
            ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Table
