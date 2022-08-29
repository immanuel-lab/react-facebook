import React, { useState } from "react";
import Home from "./Pages/Home";
import Login from "./components/login";
import PageWrapper from "./Pages/PageWrapper";
import Shop from './Pages/Shop'
function App() {
  const [showprofile, setshowProfile] = useState(false);
  return (
    <>
      {showprofile ? <PageWrapper/> : <Login onlogin={setshowProfile} />}

      {/* <Profile/> */}
      {/* <Practise/> */}
      {/* <Login/> */}
      {/* routes */}
    {/* <Shop/> */}
    </>
  );
}

export default App;
