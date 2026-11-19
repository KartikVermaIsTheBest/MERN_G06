import React from 'react'

const Navbar = () => {
  return (
    <div style={{
        border:"1px solid black",
        display: "flex",
        justifyContent: "end",
        gap: "20px"
    }}>
      <p>Home</p>
      <p>Products</p>
      <p>Cart</p>
      <p>Profile</p>
    </div>
  )
}

export default Navbar