import React,{useState} from 'react'
import  image1 from "../images/anamnesis33-q_Am3g0Peaw-unsplash.jpg"
import image2 from "../images/artem-labunsky-Sf5rOkzV-qc-unsplash.jpg"
import image3 from "../images/felix-rottmann-kDKy9jCeNho-unsplash.jpg"
import image4 from "../images/trumpet.jpg"
import image5 from "../images/tony-litvyak-pDX-IjaOI1E-unsplash.jpg"
import {AiFillLeftCircle } from "react-icons/ai"
import {AiFillRightCircle} from "react-icons/ai"
function Moveimages() {
  const slides=0
  const [currentIndex, setCurrentIndex] = useState(0);
const imgarr=[]
imgarr[0]={image1}
imgarr[1]={image2}
imgarr[2]={image3}
imgarr[3]={image4}
imgarr[4]={image5}
// function changeimg(){
//  const previousimg=()=>{
//   const isFirstslide=currentIndex===0
//   const newindex=isFirstslide?slides.length-1:currentIndex-1;
//   setCurrentIndex(newindex)
//  }
// }
// const goToNext = () => {
//   const isLastSlide = currentIndex === slides.length - 1;
//   const newIndex = isLastSlide ? 0 : currentIndex + 1;
//   setCurrentIndex(newIndex);
// };


function changeimg(){

}
  return (
    <>
    <img name="slide" alt="images" className="w-11/12 h-80 ml-10 "/>
    
    </>
  )
}

export default Moveimages