import React, { useEffect, useState } from 'react'
import Products from '../../components/products/Products'
import Catagores from '../../components/catagores/Catagores'


function AllProducts() {
   
    const [products, setProducts] = useState([])

    const getAllProducts = async() => {
        const respon = await fetch('https://fakestoreapi.com/products')
        const data = await respon.json()
        // console.log(data)
        setProducts(data)
    }
 useEffect(() =>{
    getAllProducts()
 })

  return (
  <div>
    <Catagores/>
    <Products products={products} />
  
  </div>     
        
  )
}

export default AllProducts