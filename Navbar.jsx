import React from 'react'
import './Navbar.css'
import log1 from './log1.jpeg'
import SearchBar from './SearchBar/SearchBar.jsx';
import { RiVideoAddLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar(togglDrawer) {
  // const CurrentUser=null;
   const CurrentUser = {
     result:{
    email:"xyz@mail.com",
    joinedOn:"222-07-150t9:57:23.4892",
  },
};
  return ( 
    <div className='Container_Navbar'>
        <div className="Burger_logo_Navbar">
            <div className="Burger" onClick={()=>togglDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
        <div className='logo_div_Navbar'>
            <img src={log1} alt="" />
            <p className='logo_title'>YouTube</p>
        </div>
        </div>
        <SearchBar/>
        <RiVideoAddLine size={22} className={'videobellnavbar'}/>
        <div className='apps_Box'>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        <IoMdNotificationsOutline  size={22} className='Mic_SearchBar'/>
    <div className='Auth_cont_Navbar'>{
      CurrentUser ?(
      <>
      <div className="chanel_logo">
        <p className='fstchar_logoapp'>
          {
            CurrentUser?.result.name?(
              <>
              {CurrentUser?.result.name.charAt(0).toUpperCase()}
              </>
            ):(<>
            {CurrentUser?.result.email.charAt(0).toUpperCase()}
            </>)
          }
        </p>
      </div>
      </>
      ):(
        <>
      <p className='Auth_Btn'>
      <BiUserCircle size={22}/>
      <b>Sign in</b>
      </p>
      </>
     )}
    </div>
    </div>
  );
}
export default Navbar;