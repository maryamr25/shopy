import React, { useEffect, useRef, useState } from 'react'
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Hero() {

  const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // const [go , setGo] = useState(0)

  // const ref = useRef(null);

  // const maxGo = ImageList.length; // Maximum value for `go`

  // useEffect(() => {
  //   // Set up the interval
  //   ref.current = setInterval(() => {
  //     setGo((prevGo) => {
  //       if (prevGo >= maxGo - 1) {
  //         return 0; // Reset to 0 when the last image is reached
  //       }
  //       return prevGo + 1; // Otherwise, increment the value
  //     });
  //   }, 2000); // Change image every 2000ms (2 seconds)

  //   // Cleanup interval on unmount
  //   return () => {
  //     clearInterval(ref.current);
  //   };
  // }, [maxGo]);

  const [go, setGo] = useState(0)

  const ref = useRef(null)

  const maxGo = ImageList.length

  useEffect(() => {
    ref.current = setInterval(() => {
      setGo((preGo) => {
        if (preGo >= maxGo - 1) {
          return 0
        }
        return preGo + 1
        
      })
    },2000)
    return () => {
      clearInterval(ref.current)
    }
  },[maxGo])

  return (

    <section className="  text-white body-font bg-gradient-to-r from-primary to-secondary transition-all duration-200 mt-4">
  <div className="container mx-auto flex px-1 py-7 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-2 object-cover object-center rounded" alt="hero" src={ImageList[go].img}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium  text-white">{ImageList[go].title}</h1>
      <p className="mb-2leading-relaxed">{ImageList[go].description}</p>
      <div className="flex justify-center mt-6">
        <Link to={'/allproduct'} className="  bg-white transition-all duration-200 text-black  py-2 px-4 rounded-full flex items-center gap-3 group cursor-pointer ml-2 hover:bg-primary text-1xl font-bold ">Shop Now</Link>
       
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero