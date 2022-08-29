import React from 'react'
import {BsFillCameraVideoFill} from "react-icons/bs"
import {IoMdPhotos} from "react-icons/io"
import {VscSmiley} from "react-icons/vsc"

function Centermid() {
  return (
    <>
    <div  className='container bg-purple-200 rounded-lg  h-36  w-1/3 mx-auto mt-3'>

            <input  placeholder="what's on your mind {}" className='mt-3 ml-5 bg-gray-400 w-96  placeholder-gray-800  rounded-2xl h-10 text-center outline-none'/>
 <hr className='border border-gray-400 mt-3'></hr>
                <div className='flex space-x-7 mt-3'>
                        <div className='flex items-center'>
                    <BsFillCameraVideoFill className="text-red-600 w-16 h-10"/>
                    <p className='text-md font-bold text-gray-500'>Live video</p>
                    </div>

                    <div className='flex items-center'>
                    <IoMdPhotos className="text-green-600 w-16 h-10"/>
                    <p className='text-md font-bold text-gray-500'>photos</p>
                    </div>

                    <div className='flex items-center'>
                    <VscSmiley className="text-yellow-400 w-16 h-10"/>
                    <p className='text-md font-bold text-gray-500'>activity</p>
                    </div>

                </div>
    </div>
    </>
  )
}

export default Centermid