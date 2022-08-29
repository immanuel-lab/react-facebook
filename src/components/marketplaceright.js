import React, { useEffect } from 'react'
import image from './image1.jpg'
import Axios from 'axios'
function Marketplaceright() {
        // const apiImages=useEffect(()=>{
        //         Axios.get('https://unsplash.com/search/photos?query=bikes&client_id=_Q8JcZj6Kp_rbbnFqVzExDfd4fl0EWMLMJLOkK83dDo')
        //         .then((response)=>console.log(response))
        //       .catch((error)=>{console.log(error)})
        // })
  return (
    <div className=' w-full h-screen mt-20 ml-80'>

        {/* {apiImages.map(images=><div className='grid grid-cols-3 min-h content-center bg-gray-200 space-x-6'>{images.content}</div>)} */}
        <div className='grid grid-cols-3 min-h  bg-gray-200 w-full h-screen  overflow-scroll  justify-evenly space-y-5'>
                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>
                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>
                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

                        <div>
                                <img src={image} className="w-52 h-48"/>
                        </div>

        </div>


    </div>
  )
}

export default Marketplaceright;