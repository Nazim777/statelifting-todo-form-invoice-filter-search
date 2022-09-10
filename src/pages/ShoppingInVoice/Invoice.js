import React,{useState} from 'react'
import Layout from '../../components/ChildrenProps/Layout'

const productList = [
    {
        id: 1,
        productName: 'banana',
        price: '40',
        stock: 10
    },
    {
        id: 2,
        productName: 'apple',
        price: '50',
        stock: 5
    },
    {
        id: 3,
        productName: 'grape',
        price: '60',
        stock: 6
    },
]


const TableShow = ({productName,id,price,stock,quantity,total,increment,decrement}) =>{

   return (
    <tr>
        <td>{id}</td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled= {stock==quantity} onClick={()=>increment(id)}>+</button>
        <button disabled={quantity==0} onClick={()=>decrement(id)}>-</button>
      </td>
     
    </tr>


   )
}

const Invoice = () => {
    const [product ,setProduct] = useState(productList.map((item)=>{
        return {
            ...item,
            quantity: 0 ,
            total : 0 
        }
       
    }))
    
    const incrementQuantity =(id) =>{
       // console.log(id)
       const newProduct = product.map((item) =>{
        if(id==item.id && item.stock>item.quantity) {
            item.quantity ++
            item.total = item.quantity * item.price;
        }
       return item;
       
       })
      setProduct(newProduct)
    }
     
    const decrementQuantity=(id) =>{
       // console.log(id)
       const newProduct = product.map((item)=>{
        if(id == item.id && item.quantity>0) {
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
    console.log(total)
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
     
      product.map((item)=><TableShow key={item.id} {...item} increment = {incrementQuantity} decrement ={decrementQuantity} />)
    }
 
    
  </tbody>

</table>
total:{total>0 && total}




 </Layout>
      
    </div>
  )
}

export default Invoice
