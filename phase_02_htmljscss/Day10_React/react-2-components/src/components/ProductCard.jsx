import React from 'react'

const ProductCart = (props) => {
  return (
    <div style={{
        width: "200px",
        height: "200px",
        border: "1px solid red"
    }}>
        <img width="90px" height="100px"src={props.imageUrl} alt="" />
        <h3>Title: {props.productTitle}</h3>
        <p>Price: {props.productPrice}</p>
    </div>
  )
}

export default ProductCart