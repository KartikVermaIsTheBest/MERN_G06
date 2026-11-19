import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductCart from './Components/ProductCart'

const App = () => {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ProductCart imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNzRf2ChaKHYqcl7rXbUsBbC9_tpd9XLsrgsS_dJ84w&s"
          productTitle="Iphone"
          productPrice="80000" />
        <ProductCart imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNzRf2ChaKHYqcl7rXbUsBbC9_tpd9XLsrgsS_dJ84w&s"
          productTitle="Iphone"
          productPrice="80000" />
        <ProductCart imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNzRf2ChaKHYqcl7rXbUsBbC9_tpd9XLsrgsS_dJ84w&s"
          productTitle="Iphone"
          productPrice="80000" />
        <ProductCart imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNzRf2ChaKHYqcl7rXbUsBbC9_tpd9XLsrgsS_dJ84w&s"
          productTitle="Iphone"
          productPrice="80000" />
        <ProductCart imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNzRf2ChaKHYqcl7rXbUsBbC9_tpd9XLsrgsS_dJ84w&s"
          productTitle="Iphone"
          productPrice="80000" />
      </div>
      <Footer />
    </div>
  )
}

export default App