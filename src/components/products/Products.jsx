import React from 'react'
import { Link } from 'react-router-dom'

function Products({products = []}) {
  // console.log('Products received:', products);

  return (
    <section className=" body-font">
        
    <div className="container px-2 py-24 mx-auto">
    <div className='text-center text-3xl font-bold mb-10'><h1>All Products</h1></div>
     
      <div className="flex flex-wrap mx-auto justify-center ">
          
        { 
         products.map((product) => {
              // console.log(" product map hove ke nahe " , product)
              const {id, image, price, title,category, rating, description} = product
              return (
                  <Link to={`/products/${id}`} key={id} className="lg:w-1/5 md:w-1/2 sm:w-1/4 p-4 w-full   shadow-lg shadow-gray-400  m-6">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image}/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                    <p className="mt-1 font-semibold">${price}</p>
                  </div>
                </Link>
  )
}
)
}



</div>
</div>
</section>
  )
}

export default Products