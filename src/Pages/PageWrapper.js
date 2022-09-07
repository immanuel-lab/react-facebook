import React from "react";
import Header from "../components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop"
import Home from "./Home";
import Login from "../components/login";
function PageWrapper() {
  return (
    <>
          
          <Router>
          
     <Header />
     

  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    {/* <Route path="/" element={<Login/>}/> */}
      </Routes>



</Router>


    </>
  );
}

export default PageWrapper;
