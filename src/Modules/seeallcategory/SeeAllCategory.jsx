import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Products from '../../components/products/Products'

function SeeAllCategory() {
    const [products, setProducts] = useState()
    const {name} = useParams()

    const fetchCategories = async() => {
        const respon = await fetch(`https://fakestoreapi.com/products/category/${name}`)
        const data = await respon.json()
        // console.log("category wala products........",data)
        setProducts(data)
    }

    useEffect(()=>{
        fetchCategories()
    })
  return (
    <div><Products products={products}/></div>
  )
}

export default SeeAllCategory