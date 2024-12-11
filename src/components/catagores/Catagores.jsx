import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Catagores() {
    const [category, setCategory] = useState([])

    const handleCategory = async() => {

        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        // console.log("moje yee wala data ",data)
        setCategory(data)
}

useEffect(()=>{
    handleCategory()
},[])
if(!category.length > 0 ) return <div><h1>Loading ....</h1></div>
  return (
    <section className="  body-font cursor-pointer">
    <div className="container px-5 py-24 mx-auto ">
      <div className="flex  flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">categories</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font ">Different Types OF Categories</h1>
      </div>
      <div className="flex flex-warp  ">
        {
          category?.map((card) => {
            // console.log("cateegores wala datat .....",card)
            return(
              <Link to={`/categories/${card}`} className="p-4 md:w-1/4 ">
              <div className="flex  sm:p-6 lg:p-10 p-4 flex-col bg-gradient-to-tr from-primary to-secondary transition-all duration-200 text-white mx-auto text-center">
                <div className=" ">
                 
                  <h2 className=" text-xl text-center title-font font-medium capitalize">{card || "example card"}</h2>
                </div>
                <div className="flex-grow">
                  
                  <a className="mt-4 text-blue-700 inline-flex ">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Link>

            )
          })
        }
       



      
      </div>
    </div>
  </section>
  )
}

export default Catagores