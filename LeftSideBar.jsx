import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from "react-icons/md"
import './LeftSideBar.css'
import shorts from './shorts.png'
import {NavLink}from "react-router-dom"
function LeftSideBar() {
  return (
    <div className='container_leftSidebar'>
        <NavLink to={'/'} className='iconsidebardiv' >
            <AiOutlineHome size={22} className="icon_sidebar"/>
            <div className="textsidebaricon">Home</div>
        </NavLink>
        <div className='iconsidebardiv' >
            <MdOutlineExplore size={22} className="icon_sidebar"/>
            <div className="textsidebaricon">Explore</div>
        </div>
        <div className='iconsidebardiv' >
            <img src={shorts} width={22} className="icon_sidebar"/>
            <div className="textsidebaricon">SHORTS</div>
        </div>
        <div className='iconsidebardiv'>
            <MdOutlineSubscriptions size={22} className="icon_sidebar"/>
            <div className="textsidebaricon" style={{fontSize:"12px"}}>Subcriptions</div>
        </div>
        <NavLink to={'/library'} className='iconsidebardiv' >
            <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
            <div className="textsidebaricon">Library</div>
        </NavLink>
    </div>
  )
}

export default LeftSideBar;