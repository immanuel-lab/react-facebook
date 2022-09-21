import React from 'react'
import {useEffect,useState} from "react"
import Axios from "axios"
import { MdImageSearch } from 'react-icons/md'
function Infinitescroll() {
  const[coinsimages,setcoinsimages]=useState([])
 const response= useEffect(() =>{
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then((res)=>console.log(res));
  // setcoinsimages(response.data.image)
  } )
  return (
    <>
{response.map((image)=><div className="flex flex-col"><div className='w-48 h-48 bg-slate-400'>{image.image}</div></div>)}
    </>
  )
}

export default Infinitescroll