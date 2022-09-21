import React, { useState } from "react";
import Home from "./Pages/Home";
import Login from "./components/login";
import PageWrapper from "./Pages/PageWrapper";
import Shop from './Pages/Shop'
import { useSelector } from "react-redux";
import Infinitescroll from "./components/infinitescroll";
import Practise from "./components/practise";
import Moveimages from "./components/moveimages";
function App() {
  const [showprofile, setshowProfile] = useState(false);
  const user=useSelector((state)=>state.user.user)
  return (
    <>
    {/* {user ? <PageWrapper/>:<Login/>} */}
      {/* {showprofile ? <PageWrapper/> : <Login onlogin={setshowProfile} />} */}
      {/* {showprofile ? <PageWrapper/> : <Login />} */}

      {/* <Profile/> */}
      {/* <Practise/> */}
      {/* <Login/> */}
      {/* routes */}
    {/* <Shop/> */}
    {/* <Login/> */}
<Moveimages/>
    {/* <Infinitescroll/> */}
    {/* <Practise/> */}
    </>
  );
}

export default App;
