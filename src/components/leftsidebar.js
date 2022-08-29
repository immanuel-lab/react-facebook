import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsShopWindow ,BsFillBookmarkCheckFill,BsMessenger } from "react-icons/bs";
import { BsFillPlayBtnFill } from "react-icons/bs";
import {AiOutlineClockCircle,AiFillFlag,AiFillHeart,AiFillStar} from 'react-icons/ai'
import {GiRoundStar,GiTrumpet  } from "react-icons/gi";
import {FcAlarmClock} from "react-icons/fc"
import {MdSignalWifiStatusbar4Bar,MdBloodtype} from 'react-icons/md'
import {RiPlantFill} from 'react-icons/ri'
import {SiFacebookgaming} from 'react-icons/si'
import {FcEnteringHeavenAlive} from 'react-icons/fc'

import {useSelector} from 'react-redux'
import { selectUser } from '../features/user';

function Leftsidebar() {
      const user=useSelector(selectUser)
  return (
    <>
    <div className=' container hover:overflow-y-scroll w-72 bg-green-400  h-screen   fixed left-0  '>

        <div className='flex mt-3'>
<CgProfile className='w-20 h-10'/>
            
          <p className='mt-2 font-semibold'>{user.name}</p>
                
                </div>

                <div className='flex mt-3'>
<FaUserFriends className='w-20 h-7 text-emerald-500'/>
            
          <p className='mt-2 font-semibold'>Friends</p>
                
                </div>

                <div className='flex mt-3 ml-4'>
                    <div  className='rounded-full  bg-blue-600'>
<MdGroups className='w-10 h-6 text-white'/>
</div>
          <p className='mt-2 font-semibold ml-5'>Groups</p>
                
                </div>

                <div className='flex mt-3'>
<BsShopWindow className='w-20 h-6 mt-1 text-blue-700 font-bold'/>
            
          <p className='mt-2 font-semibold'>Marketplace</p>
                
                </div>

                
                <div className='flex mt-3'>
<AiOutlineClockCircle className='w-20 h-6 mt-2 text-blue-700'/>
            
          <p className='mt-2 font-semibold' >Memories</p>
                
                </div>

                <div className='flex mt-3'>
<BsFillBookmarkCheckFill className='w-20 h-6 mt-2 text-purple-900'/>
            
          <p className='mt-2 font-semibold' >Saved</p>
                
                </div>


                <div className='flex mt-3'>
<AiFillFlag className='w-20 h-6 mt-2 text-yellow-700'/>
            
          <p className='mt-2 font-semibold' >Pages</p>
                
                </div>


                <div className='flex mt-3'>
<GiRoundStar className='w-20 h-6 mt-2 text-red-700'/>
            
          <p className='mt-2 font-semibold' >Events</p>
                
                </div>


                <div className='flex mt-3'>
<FcAlarmClock className='w-20 h-6 mt-2 text-blue-700'/>
            
          <p className='mt-2 font-semibold' >Most recent</p>
                
                </div>


                <div className='flex mt-3'>
<GiTrumpet className='w-20 h-6 mt-2 text-blue-700'/>
            
          <p className='mt-2 font-semibold' >Ad cener</p>
                
                </div>


                <div className='flex mt-3'>
<MdSignalWifiStatusbar4Bar className='w-20 h-6 mt-2 text-blue-700'/>
            
          <p className='mt-2 font-semibold' >Ads Manager</p>
                
                </div>


                <div className='flex mt-3'>
<MdBloodtype className='w-20 h-6 mt-2 text-red-700'/>
            
          <p className='mt-2 font-semibold' >blood donation</p>
                
                </div>


                <div className='flex mt-3'>
<RiPlantFill  className='w-20 h-6 mt-2 text-green-700'/>
            
          <p className='mt-2 font-semibold' >climate science center</p>
                
                </div>


                <div className='flex mt-3'>
<AiFillHeart className='w-20 h-6 mt-2 text-yellow-700'/>
            
          <p className='mt-2 font-semibold' >community help</p>
                
                </div>

                <div className='flex mt-3'>
<AiFillStar className='w-20 h-6 mt-2 text-yellow-700'/>
            
          <p className='mt-2 font-semibold' >favorites</p>
                
                </div>

                <div className='flex mt-3'>
<SiFacebookgaming className='w-20 h-6 mt-2 text-blue-700'/>
            
          <p className='mt-2 font-semibold' >Gaming video</p>
                
                </div>

                <div className='flex mt-3'>
<FcEnteringHeavenAlive className='w-20 h-6 mt-2 text-yellow-700'/>
            
          <p className='mt-2 font-semibold' >live video</p>
                
                </div>


                <div className='flex mt-3'>
<BsMessenger className='w-20 h-6 mt-2 text-blue-400'/>
            
          <p className='mt-2 font-semibold' >messenger</p>
                
                </div>

                <div className='flex mt-3'>
<BsMessenger className='w-20 h-6 mt-2 text-cyan-400'/>
            
          <p className='mt-2 font-semibold' >messenger kids</p>
                
                </div>


    </div>

   
    
    </>
  )
}

export default Leftsidebar