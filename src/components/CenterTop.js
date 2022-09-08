import React, { useRef } from 'react'
// import image from './image1.jpg'
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import {data} from "./images"
function CenterTop() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 400;
  };
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
            <div  id="slider" className='flex items-center gap-2 mt-5 overflow-x-scroll  scrollbar-hide '>
              <div onClick={slideLeft} className='p-2 rounded-full bg-gray-300 absolute z-10 hover:cursor-pointer'>
              <MdChevronLeft size={30}  />
              </div>
              
             {data.map(image=><img src={image.img} alt="image" className="w-32 h-48 rounded-lg hover:scale-105 ease-in-out duration-300 cursor-pointer "/>)}
             <div onClick={slideRight} className=' p-2 rounded-full bg-gray-300 ml-96 absolute z-10 hover:cursor-pointer'>

          <MdChevronRight size={30}  />
                    </div>
</div>

  </div>
  )
}

export default CenterTop