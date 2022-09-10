import React from 'react'

const TableShow = ({productName,id,price,stock,quantity,total,increment,decrement}) => {
  return (
    <tr>
        <td>{id}</td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={stock==quantity} onClick={()=>increment(id)} >+</button>
        <button disabled={quantity==0} onClick={()=>decrement(id)} >-</button>
      </td>
     
    </tr>

  )
}

export default TableShow
