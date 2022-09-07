import React from 'react'

function Feed({userinput,photo,removeimage}){
    
  return (
    <>
    <div  className=' bg-purple-200 rounded-lg  h-screen  w-1/3 mx-auto mt-5'>
      <img src={photo} className="w-96 ml-6 h-72"></img> 
        <center><p className='mt-3 text-xl'>{userinput}</p> </center>
       <center><button onClick={removeimage} className='bg-red-500 p-2 text-white' >Remove</button></center> 
    </div>
    </>
  )
}

export default Feed
