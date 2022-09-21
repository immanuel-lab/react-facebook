import React from 'react'
import  image1 from "../images/anamnesis33-q_Am3g0Peaw-unsplash.jpg"
import image2 from "../images/artem-labunsky-Sf5rOkzV-qc-unsplash.jpg"
import image3 from "../images/felix-rottmann-kDKy9jCeNho-unsplash.jpg"
import image4 from "../images/trumpet.jpg"
import image5 from "../images/tony-litvyak-pDX-IjaOI1E-unsplash.jpg"
import SimpleImageSlider from "react-simple-image-slider";
 function Moveimages() {
    const images=[image1,image2,image3,image4,image5];
  return (
    <>
     <SimpleImageSlider
        width={1300}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={2}
      />
    
    </>
  )
}

export  default Moveimages;