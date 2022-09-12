import React from 'react'
import Axios from 'axios'
import {useEffect,useState} from "react"
function Infinitescroll() {
   const [images,setImages]=useState([])
    useEffect(() => {
Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then((res)=>{console.log(res) ;setImages(res.data) }).catch(err=>console.log(err));
 
    })
  return (
    <>
   {images.map((image)=><div className="flex justify-center mb-3"><div className="w-96 h-80 bg-emerald-500 flex items-center "><img src={image.image} alt="image" className="w-80 h-72 ml-6"/></div></div>)}
    
    I</>
  )
}

export default Infinitescroll