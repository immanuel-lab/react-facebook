import React from 'react'
import {BiVideoPlus} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
function Rightsidebar() {
  return (
    <>
    <div className=' container hover:overflow-scroll  w-72  h-full bg-purple-200 fixed right-0  mr-4   mb-32  '>
        <p className='text-md font-bold text-gray-500 '>Sponsored</p>
    <hr className='mt-3 border border-gray-300 '></hr>
        <div className= ' w-full  h-10 '>
            
        <div className='flex  justify-end space-x-5 '>

                <p className=' font-sans text-lg  font-medium text-gray-500 mr-20'>Contacts</p>
              
                 <div>
                    <BiVideoPlus className='text-gray-600 w-5 h-10 '/>
                 </div>

                 <div>
                < AiOutlineSearch className='text-gray-600 w-5 h-10 '/>
                 </div>

                 <div>
                    <BsThreeDots className='text-gray-600 w-5 h-10'/>
                 </div>
                 </div>
<div className='space-y-5'>
      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>veera shanmugam</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>dhinesh shanmugam</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>lokesh</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>anthony</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>johnson</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>veera shanmugam 1</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>veera shanmugam 2</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>veera shanmugam 3</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>yogesh</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/> 
        <p className='font-bold text-gray-600 ml-2 '>maniku</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>giriku</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>ruhthi</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>mahesh</p>
      </div>

      <div className='flex'>
        <CgProfile className='w-8 h-6'/>
        <p className='font-bold text-gray-600 ml-2'>kuku</p>
      </div>

</div>
 
<hr className='mt-3 border border-gray-300 '></hr>

            </div>
</div>
    </>
  )
}

export default Rightsidebar