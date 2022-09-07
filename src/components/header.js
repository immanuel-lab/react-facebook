import React, { useEffect, useState,useRef } from "react";
import fblogo from "./fblogo.png";
import { BsPlayBtn, BsShopWindow } from "react-icons/bs";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Marketplace from "./marketplaceleft";
import Profile from "../components/profile";
import Login from "../components/login";
import { NavLink,useNavigate } from "react-router-dom";
import Shop from "../Pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Tippy from '@tippyjs/react';

// drop down icons
import { FiSettings } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { BsArrowDownCircleFill } from "react-icons/bs";
import userEvent from "@testing-library/user-event";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";


function Header() {


  // show drop down

  const [show, setShow] = useState(false);

 

    let domNode = useRef();

    const user=useSelector((state)=>state.user.user)
  

    useEffect(() => {
      document.addEventListener("mousedown", 
      (event) => {
        if (!domNode.current.contains(event.target)) {
         setShow(false);
        }
      });
      });
const dispatch=useDispatch()
      const handlelogout=(e)=>{
        e.preventDefault();

dispatch(logout())
      }
  
   const activeClassName='text-blue-500 border-b-2 border-blue-400'
  return (
    <>
      <div className="bg-white w-full h-16 flex  fixed top-0 z-10">
        {/* left */}

        <div className="flex items-center ">
          <img src={fblogo} alt="images" className="w-13 h-10" />

          <div className="flex  ml-2 p-1 rounded-full bg-gray-100">
            <AiOutlineSearch className="w-6 h-7" />
            <input
              type="text"
              placeholder="search facebook"
              className=" flex ml-2 bg-gray-100  items-center placeholder-gray-500 outline-none"
            />
          </div>
        </div>

        {/* center header */}
   
    
        <div className="flex   justify-center flex-grow  items-center space-x-12 mr-16 ">
       
       <Tippy content={<div className="bg-gray-900 px-2 py-1  rounded-md text-white opacity-80 transition ease-in-out  ">Home</div>}>
        <NavLink to="/home"   className={({ isActive }) =>
         isActive ? activeClassName : undefined
        }>
          <AiOutlineHome
        
          
            className="w-16 h-16 cursor-pointer px-4 py-1  rounded-lg  hover:bg-gray-200 "
          /> 
        </NavLink>
         </Tippy>
 
       <Tippy content={<div className="bg-gray-900 px-2 py-1  rounded-md  text-white opacity-80 transition ease-in-out   ">Watch</div>}>
          
          <div>
          <BsPlayBtn
          
            className="w-16 h-16 cursor-pointer px-4 py-1rounded-md  hover:bg-gray-200 "
          />
          </div>
          </Tippy>

       <Tippy content={<div className="bg-gray-900 px-2 py-1  rounded-md  text-white opacity-80 transition ease-in-out   ">Marketplace</div>}>
         <NavLink to="/shop"   className={({ isActive }) =>
         isActive ? activeClassName : undefined
        } >
          <BsShopWindow
           
            className="w-16 h-16 cursor-pointer px-4 py-1  hover:bg-gray-200 "
          />
          </NavLink>
         
          </Tippy>

         
       <Tippy content={<div className="bg-gray-900 px-2 py-1  rounded-md  text-white opacity-80  transition ease-in-out  ">Gaming</div>}>
         <div>
          <TbDeviceGamepad2
         
            className="w-16 h-16 cursor-pointer px-4 py-1 rounded-lg hover:bg-gray-200 "
          />
          </div></Tippy>
            
        </div>

       

        {/* last header */}

        <div className="flex justify-end items-center  mr-3">
       
        <Tippy content={<div className="bg-gray-900 px-2 py-1  rounded-md  text-white opacity-80  transition ease-in-out  ">Menu</div>}>

          <div className="bg-gray-300 p-2 rounded-full cursor-pointer">
            <CgMenuGridO className="w-7 h-7" />
          </div>
          </Tippy>
         
        <Tippy content={<div className="bg-gray-900 px-2 py-1  rounded-md  text-white opacity-80  transition ease-in-out  ">Messenger</div>}>
        <div className="bg-gray-300 rounded-full p-2  ml-2 cursor-pointer">
            <TbMessageCircle2 className="w-7 h-7" />
          </div>
          </Tippy>

        <Tippy content={<div className="bg-gray-900 px-2 py-1  rounded-md  text-white opacity-80  transition ease-in-out  ">Notification</div>}>
          <div className="bg-gray-300 rounded-full  p-2  ml-2 cursor-pointer">
            <IoIosNotifications className="w-7 h-7" />
          </div>
          </Tippy>


          <Tippy content={<div className="bg-gray-900 px-2 py-1  rounded-md  text-white opacity-80  transition ease-in-out  ">Account</div>}>

          <div  
            onClick={() => {
              setShow(!show);
            }}
            className="bg-gray-300 rounded-full  p-2  ml-2 cursor-pointer"
          >
            <CgProfile className="w-7 h-7" />
          </div>
          </Tippy>

          <hr className="bg-gray-300"></hr>


        </div>

      </div>

    {/* tooltip */}
      {/* <div className="flex  justify-center  mt-1 ">
        {Title && (
          <p className="p-1 rounded-md bg-black  text-white opacity-80">Home</p>
        )}
        {Title1 && (
          <p className="p-1 rounded-md bg-black  text-white opacity-80">
            Watch
          </p>
        )}

        {Title2 && (
          <p className="p-1 rounded-md bg-black  text-white opacity-80 ml-60">
            Marketplace
          </p>
        )}

        {Title3 && (
          <p className="p-1 rounded-md bg-black  text-white opacity-80 ml-96">
            Gaming
          </p>
        )}
      </div> */}

      {/* drop down menu */}

      {show ? (
        <>
          <div   className="flex justify-end mr-5  absolute right-0 z-10 ">
            <div ref={domNode} className="w-80  h-96 bg-white mt-3 ml-3">
              <div class=" mt-5  ml-2 mr-2 h-24 flex  flex-col p-2   bg-gray-100 rounded-xl ">
                <div className="flex gap-6 items-center p-2 hover:bg-slate-200 cursor-pointer rounded-lg">
                  <div className="bg-slate-150 h-8 w-8 rounded-full flex items-center justify-center ">
                    <CgProfile className="text-center" />
                  </div>
                  <div >
                    <p className="text-center text-xl text-black-500  font-bold ">
                   {user.name}
                    </p>
                  </div>
                </div>

                <hr></hr>

                <div >
                  <span className="text-blue-500 text-sm font-bold">Sell all profiles</span>
                </div>
              </div>

              <div className="flex mt-3 hover:bg-gray-200 cursor-pointer">
                <div className="p-4 bg-gray-200 rounded-full ml-2">
                  <FiSettings className=" w-5" />
                </div>
                <p className="text-xl text-black ml-5 mt-2">
                  settings & privacy
                </p>
              </div>

              <div className="flex mt-3 hover:bg-gray-200 cursor-pointer">
                <div className="p-4 bg-gray-200 rounded-full ml-2">
                  <AiFillQuestionCircle className="w-5 h-5" />
                </div>
                <p className="text-xl text-black ml-5 mt-2">help & support</p>
              </div>

              <div className="flex mt-3 hover:bg-gray-200 cursor-pointer">
                <div className="p-4 bg-gray-200 rounded-full ml-2">
                  <BsFillMoonFill />
                </div>
                <p className="text-xl text-black ml-5 mt-2">
                  dispaly and accessability
                </p>
              </div>

              <div onClick={handlelogout} className="flex mt-3 hover:bg-gray-200 cursor-pointer">
                <div className="p-4 bg-gray-200 rounded-full ml-2">
                  <BsArrowDownCircleFill />
                </div>
                <p className="text-xl text-black ml-5 mt-2">logout</p>
              </div>
            </div>
          </div>
        </>
      ) : null}

</>
    
  );
}

export default Header;
