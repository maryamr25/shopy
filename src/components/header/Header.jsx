import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa'


function Header() {
  
    const navigation = [
        {
            name : 'Home',
            path : '/'
        },
        {
            name : 'About',
            path : '/about'
        },
        {
            name: 'All Products',
            path : '/products'
        },
        {
            name: 'Contact',
            path : '/contact'
        }
    ]

    //light and dark mode
    const [theme, setTheme] = useState('light-mode')

    useEffect(()=> {
        document.querySelector('body').className=theme
    },[theme])

    const changeTheme = () =>{
        if(theme === 'light-mode'){
            setTheme('dark-mode')
        }else{
            setTheme('light-mode')
        }
    }
  return (

    <div className=" body-font">
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center shadow-lg  ">
    <Link to={'/'} className="flex title-font font-medium items-center mb-4 md:mb-0">
      <img src={Logo} className='w-15 h-12'/>
      <span className="ml-3 text-xl uppercase font-bold">Shopy</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center ">
      {
        navigation.map((nav) => {
            return(
                <Link to={nav.path} className="mr-5 hover:text-gray-700 text-1xl font-semibold"> {nav.name}</Link>
            )
        })
      }
    </nav>
    {/* light and dark mode */}
    <div className='w-12 h-15 items-center justify-center' onClick={changeTheme}>{theme === 'light-mode' ? <img src='/light-mode-button.png' /> : <img src='/dark-mode-button.png'/>} </div>
    <Link to={'/cart'} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group cursor-pointer ml-2 ">
    <span className='group-hover:block hidden transition-all duration-200'>order</span>
    <FaShoppingCart  className='text-xl drop-shadow-sm '/>
      
    </Link>
  </div>
</div>
  )
}

export default Header