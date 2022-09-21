import Tippy from '@tippyjs/react'
import React from 'react'
import image1 from './image1.jpg'
import {useState} from "react"
function Practise () {
const[fact, setFact]=useState(false)
const[show ,setShow]=useState(false)
  const factorial=(num)=>{
    let i
    let fact=1

  if(num===0||num===1)
  return 1
  else{
    for(i=1; i<=num ;i++){
fact=fact*i;
    }
return fact;
  
}
  }
  return (
    
    <>
        <input type="number" placeholder="enter value" onChange={(e)=>setFact(e.target.value)}/>
        <button onClick={()=>setShow(true)}className="p-2 bg-green-200 text-bold">get value</button>
        {show && `the factorial is : ${factorial(fact)}`}
    </>
    
  )
}

export default Practise