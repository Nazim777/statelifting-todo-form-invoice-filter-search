import React from 'react'
import Layout from '../../components/ChildrenProps/Layout'
const data = {
    product:[
        {
            id: 1,
            name:'Shirt',
            price: 120,
            size: 'XL',
            color: 'orange'
        },
        {
            id: 2,
            name:'T-shirt',
            price: 100,
            size: 'L',
            color: 'yellow'
        },
        {
            id: 3,
            name:'Pant',
            price: 150,
            size: 'XXL',
            color: 'blue'
        }
       
    ],
    review :[
        {
            id: 1,
            name: 'Rahim',
            review: '5 star'
        },
        {
            id: 2,
            name: 'Abdur Rahman',
            review: '5 star'
        },
    ],
    isChackedout: 'pending',
    comment : [
        {
            id:1,
            name: 'rahim',
            comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis corrupti omnis quia consectetur qui est exercitationem '
        },
        {
            id:2,
            name: 'Adbur Rahman',
            comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis corrupti omnis quia consectetur qui est exercitationem '
        },
    ],
    newProduct : {
        product1: 'branded t-shirt',
        product2: 'branded pant',
        product3: 'branded shirt'

    }



}

 

const ShoppingProduct = ({product}) =>{
    return(
        <tr>
        <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.size}</td>
      <td>{product.color}</td>
      
     
     
    </tr>
    )

}

const ProductReview = ({review}) =>{
    return(
        <>
        <p>name: {review.name}</p>
        <p>rating: {review.review}</p>
        </>

    )
}

const Comment = ({comment}) =>{
    return(
        <>
        <p>{comment.name}</p> 
        <small>{comment.comment}</small>

        

        </>

    )
}

const Json = () => {
  return (
    
       <Layout>
        <div className='container'>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Size</th>
            <th scope="col">Color</th>
          </tr>
        </thead>
        <tbody>
            {data.product.map((item)=><ShoppingProduct  product= {item}/>)}

          
       
          
        </tbody>
      
      </table>
      <div style={{display:'flex',justifyContent:'space-between'}}>

      <div>
        <h4>public review</h4>
        {data.review.map((item)=><ProductReview key={item.id} review = {item}/>)}
      </div>
       <div style={{width:'400px'}}>
        <h4>public comment</h4>
        {data.comment.map((item)=><Comment key={item.id} comment={item}/>)}
      </div> 

      <div>
        <h4>new product</h4>
        <ul>
            <li>{data.newProduct.product1}</li>
            <li>{data.newProduct.product2}</li>
            <li>{data.newProduct.product3}</li>
        </ul>
      </div>
      </div>
       
       
        
      
       </div>
       </Layout>
      
   
  )
}

export default Json
