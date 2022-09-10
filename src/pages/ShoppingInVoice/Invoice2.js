import React,{useState} from 'react'
import Layout from '../../components/ChildrenProps/Layout'
import ProductList from './InvoiceComponents/ProductList'
import TableShow from './InvoiceComponents/TableShow'

const Invoice2 = () => {
   const [product,setProduct] = useState(ProductList.map((item)=>{
    return {
        ...item,
        quantity : 0,
        total: 0
    }
   }))
   
   const incrementQuantity = (id) =>{
    const newProduct = product.map((item)=>{
        if(id===item.id && item.stock>item.quantity) {
            item.quantity++
            item.total = item.quantity * item.price
        }
        return item
    })
    setProduct(newProduct)
   }

   const decrementQuantity = (id) =>{
    const newProduct = product.map((item)=>{
        if(id==item.id && item.quantity>0) {
            item.quantity-- 
            item.total = item.quantity * item.price
        }
        return item
    })
    setProduct(newProduct)
   }
   
   const total = product.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue.total

   },0)
  return (
    <div>
        <Layout>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        product.map((item)=><TableShow key={item.id} {...item} increment={incrementQuantity} decrement={decrementQuantity}/>)
    }

    
   
    
  </tbody>

</table>

<h1>Total: {total>0&& total}</h1>

</Layout>
      
    </div>
  )
}

export default Invoice2
