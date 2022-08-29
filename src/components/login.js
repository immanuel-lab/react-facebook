import React ,{useRef,useEffect,useState} from 'react'
// import { useForm } from "react-hook-form";
// import {useNavigate} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {login} from '../features/user'

function Login({onlogin}) {
  //   const value=useRef()
  //   useEffect(()=>
  // value.current.focus(),[]
  //   )
  // const navigate=useNavigate()
    const onSubmit = data => console.log(data);
    // const {register, formState:{errors} } = useForm();

    const[name,setName]= useState('')
const  dispatch=useDispatch();

const handleSubmit=(e)=>{
  e.preventDefault();

  dispatch(login({
    name:name
  }))
};

  return (
    <>
    <div className='flex bg-gray-100 w-full h-screen'>

        
            <div className='mx-56 my-52' id='logo'>
                <h1 className='text-blue-500 font-bold text-6xl '>facebook</h1><br></br>
                <h1 className='text-black-200 font-normal text-3xl'>Facebook helps you connect and share <br></br>with the people in your life</h1>
            </div>

            <div className='container bg-white mt-40 mr-64 mb-28 ' id="login">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input   value={name}  type="text"   placeholder="Name " className='border br-black-500  mt-5 w-11/12 ml-4  p-4 rounded-md focus:outline-none focus:border-blue-600 placeholder:text-gray-500 placeholder:font-thin placeholder:text-xl' onChange={(e)=>setName(e.target.value)}   /><br></br>
                 <input  type="Password" placeholder='password'  className='border br-black-500  mt-3 w-11/12 ml-4  p-4 placeholder:text-gray-600 placeholder:font-thin placeholder:text-xl focus:outline-none focus:border-blue-500 '  />
                <button type="submit"  onClick={()=>onlogin(true)} className=' bg-blue-500 p-3 mt-3 w-11/12 ml-4 rounded-md text-white font-normal text-2xl hover:bg-blue-700'  >Log In</button><br></br>
              
                <p className='text-center text-md text-blue-500 mt-2 hover:underline cursor-pointer'>forgotten password ?</p>
                <hr className='mt-5 w-11/12 ml-3' />
                <br></br>
                <on  className='bg-lightgreen  p-3 text-white  ml-28 hover:bg-green-600  rounded-md text-xl font-semibold'>Create New Account</on>
             </form>
             
             </div>
        
        </div>
    {/* </div> */}
    
    
    </>
  )
}

export default Login