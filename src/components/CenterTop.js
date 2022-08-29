import React from 'react'
import image from './image1.jpg'

function CenterTop() {
  return (
    <div className=' bg-purple-200 rounded-lg  h-72  w-1/3 mx-auto '>
          {/* <div className='mt-48 '> */}
                <div className='mt-20  flex items-center'>
                <p className=' font-medium text-xl ml-5'>Stories</p>
                <p className=' font-medium text-xl ml-28'>Reels</p>
                <p className=' font-medium text-xl ml-32'>Rooms</p>
                </div>
                {/* </div> */}
            <hr className='mt-5 border border-gray-500'></hr>
            <div className='flex mt-2 overflow-x-scroll gap-2'>

                            <div>
                                <img src={image} className='w-48  h-48 rounded-lg'/>
                                </div>

                                <div>
                                <img src={image} className='w-48  h-48 rounded-lg ml-3'/>
                                </div>

                                <div>
                                <img src={image} className='w-48  h-48 rounded-lg'/>
                                </div>

                                <div>
                                <img src={image} className='w-48  h-48 rounded-lg'/>
                                </div>

                                <div>
                                <img src={image} className='w-48  h-48 rounded-lg'/>
                                </div>

                                <div>
                                <img src={image} className='w-48  h-48 rounded-lg'/>
                                </div>
            </div>
  </div>
  )
}

export default CenterTop