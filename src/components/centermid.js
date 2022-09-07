import React, { useRef, useState } from 'react'
import {BsFillCameraVideoFill} from "react-icons/bs"
import {IoMdPhotos} from "react-icons/io"
import {VscSmiley} from "react-icons/vsc"
import Feed from './feed'
function Centermid() {
const[key,setKey]=useState(null)
  const[Input,setInput]=useState(null)
const[photos,setPhotos]=useState(null)

const photopicker=useRef()
const addImagetoFeed=(e)=>{
  const reader=new FileReader();
  if(e.target.files[0]){
    reader.readAsDataURL(e.target.files[0]);
  }
  reader.onload=(readerevent)=>{
    setPhotos(readerevent.target.result)
  }
}
// const user=((state)=>state.user.user);
const removeimage=()=>{
  setPhotos(null)
}



  return (
    <>
    <div  className='container bg-purple-200 rounded-lg  h-36  w-1/3 mx-auto mt-3'>

<div className='flex'>
            <input  onKeyPress={(e)=>setKey(e.key==='Enter' && setInput(e.target.value))}    placeholder="what's on your mind" className='mt-3 ml-5 bg-gray-400 w-48  placeholder-gray-800  rounded-2xl h-10 text-center outline-none'/>
 {/* {photos && (<div  onClick={removeimage} className="flex p-2">
  <image src={photos} className="object-contain h-5"/>
  <p className='text-red-500'>remove</p>
 
 </div>)} */}
 </div>
 
 <hr className='border border-gray-400 mt-3'></hr>
                <div className='flex space-x-5 mt-3'>
                        <div className='flex items-center'>
                    <BsFillCameraVideoFill className="text-red-600 w-16 h-10"/>
                    <p className='text-md font-bold text-gray-500'>Live video</p>
                    </div>

                    <div onClick={()=>photopicker.current.click()} className='flex items-center px-2 py-1 rounded-lg hover:bg-gray-400  hover:cursor-pointer'>
                    <IoMdPhotos className="text-green-600 w-16 h-10"/>
                    <p className='text-md font-bold text-gray-500'>photos</p>

                    <input ref={photopicker}  onChange={addImagetoFeed}  type="file" hidden/>
                    </div>

                    <div className='flex items-center'>
                    <VscSmiley className="text-yellow-400 w-16 h-10"/>
                    <p className='text-md font-bold text-gray-500'>activity</p>
                    </div>

                </div>
    </div>
    <Feed userinput={Input}  photo={photos}  removeimage={removeimage} />
    </>
  )
}

export default Centermid;