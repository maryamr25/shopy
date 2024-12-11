
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'



function SingleProduct() {
    const [ekproduct, setEkproduct] = useState({})
    const {id} = useParams()
    console.log(ekproduct,id , "single id")

    const singlePro = async() => {

        const response = await fetch (`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        // console.log(data , 'data single product wala')
        setEkproduct(data)
    }

        useEffect(()=>{
            singlePro()
        },[])

          // local storage per save kar na data
// const handleCart = (singlePro, redirect) => {
//     // console.log(singlePro)
//     const cart = JSON.parse(localStorage.getItem('cart')) || []
//     const exist = cart.find(item => item.id === singlePro.id)
//     if(exist) {
//       const updateCart = cart.map(item => {
//         if(item.id === singlePro.id) {
//           return {...item, quantity: item.quantity + 1
  
//           }
//         }
//         return item
//       })
//       localStorage.setItem('cart' , JSON.stringify(updateCart))
//     }else {
//        localStorage.setItem('cart', JSON.stringify([...cart, {...singlePro, quantity: 1}]))
//     }
//     alert('Add to Card.')
//     if(redirect){
//       Navigate('/cart')
//     }
    
    
//   }
//   if(!Object.keys(ekproduct).length > 0) return <div><h1 className='text-center text-5xl font-bold my-20 p-10'>Loading .....</h1> </div>
  
  

const handleCart = (singlePro , redirect) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const exist = cart.find(item => item.id === singlePro.id)
  if(exist) {
    const updateCart = cart.map((item) => {
      if(item.id === singlePro.id) {
        return {...item, quantity : item.quantity + 1}
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updateCart))
  }else {
    localStorage.setItem('cart' , JSON.stringify([...cart, {...singlePro , quantity : 1}]))
  }
  alert('Add to cart')
    if(redirect){
    Navigate('/cart')
  
  }
  }
  return (
   
    <div className="flex container  mx-auto  font-sans  mt-12 sm:w-1/2 ">
        
    <div className="flex-none w-48 relative">
      <img src={ekproduct?.image} alt={ekproduct?.title} className="absolute inset-0 w-full h-full object-contain "  />
    </div>
    <form className="flex-auto p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-lg font-semibold text-slate-900">
        {ekproduct?.title}
        </h1>
        <div className="text-lg font-semibold text-slate-500">
        ${ekproduct?.price}
        </div>
        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
          In stock
        </div>
      </div>
      <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div className="space-x-2 flex text-sm">
          <label>
            <input className="sr-only peer" name="size" type="radio" value="xs" checked />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XS
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="s" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              S
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="m" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              M
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="l" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              L
            </div>
          </label>
          <label>
            <input className="sr-only peer" name="size" type="radio" value="xl" />
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XL
            </div>
          </label>
        </div>
      </div>
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4 py-1">
          <Link to={'/cart'} className=" px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Buy now
          </Link>
          <button className=" px-6  font-semibold rounded-md border border-slate-200 text-slate-900" type="button" onClick={() => handleCart(ekproduct)}>
            Add to bag
          </button>
        </div>
        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-slate-700">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div>
  )
}

export default SingleProduct