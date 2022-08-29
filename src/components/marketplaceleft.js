import React from 'react'
import {FiSettings} from "react-icons/fi"
import {AiOutlineSearch,AiFillShopping,AiOutlinePlus} from "react-icons/ai"
import {SiTorbrowser} from "react-icons/si"
import {IoIosNotifications} from 'react-icons/io'
import {BsArrowUpLeftCircleFill} from "react-icons/bs"
function Marketplaceleft() {
  return (
    <>
 

    <div className='w-72 h-screen  hover:overflow-auto  fixed left-0 top-20 '>
            <div className='flex gap-36 ml-3'>
                <h1 className='text-xl text-black font-bold'>Marketplace</h1>
                <div className='bg-gray-200 p-2 rounded-full items-center'>
               < FiSettings className='text-black'/>
                </div>
            </div>

            <div className='px-5 ml-3 mr-3 mt-2 py-2 flex items-center bg-gray-200 rounded-full'>
                <AiOutlineSearch/>
                <input placeholder='search marketplace' className='outline-none ml-1 bg-gray-200'/>
            </div>

            <div className='px-5 ml-3 mr-3 mt-2 py-2 flex items-center bg-gray-200 rounded-lg'>
                    <div className='p-1 bg-blue-700 rounded-full items-center'>
                        <SiTorbrowser className='text-white'/>
                    </div>
                    <p className='ml-4'>Browse All</p>

            </div>

            <div className='flex items-center ml-2 mt-3'>
                <div className='p-2 bg-gray-200 rounded-full'>
                    <IoIosNotifications className='w-5 h-5'/>
                </div>
                    <p className='ml-3  font-semibold'>Notification</p>
            </div>


            <div className='flex items-center ml-2 mt-3'>
                <div className='p-2 bg-gray-200 rounded-full'>
                    <AiFillShopping className='w-5 h-4'/>
                </div>
                    <p className='ml-3  font-semibold'>Buying</p>
            </div>

            <div className='flex items-center ml-2 mt-3'>
                <div className='p-2 bg-gray-200 rounded-full'>
                    <BsArrowUpLeftCircleFill className='w-5 h-4'/>
                </div>
                    <p className='ml-3  font-semibold'>Selling</p>
            </div>


            <div className='px-6 bg-blue-100 rounded-lg flex mt-2 ml-2 py-1 items-center justify-center'>
                <AiOutlinePlus className='text-blue-600'/>
                <p className='text-xl  text-blue-700 ml-1'>create new listing</p>

            </div>

            <hr className='border border-gray-200 mt-2 ml-2 mr-2'></hr>

            <div className='ml-2 mt-2'>
                <p className='text-black font-medium'>Filters</p>
                <p className='text-blue-400 font-medium mt-2'>Chennai,India within 60kms</p>
            </div>

            <hr className='border border-gray-200 mt-2 ml-2 mr-2'></hr>
   
   <div className='ml-2 mt-2'>
    <p className='text-black font-medium'>Categories</p>
    <div className='space-y-3'>
        <p className='text-black font-medium'>vehicles</p>
        <p className='text-black font-medium'>apparel</p>
        <p className='text-black font-medium'>Entertainment</p>
        <p className='text-black font-medium'>Family</p>
        <p className='text-black font-medium'>free stuff</p>
        <p className='text-black font-medium'>Garden</p>
        <p className='text-black font-medium'>outdoor</p>
        <p className='text-black font-medium'>hobbies</p>
        <p className='text-black font-medium'>pet supplies</p>
        <p className='text-black font-medium'>sporting groups</p>
    </div>
   </div>
   
 
   
   
  </div>


    </>
  )
}

export default Marketplaceleft;