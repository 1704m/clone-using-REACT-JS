import React from "react";
import "./LeftSideBar.css";
import { AiFillAlipaySquare, AiFillLike, AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import shorts from "./shorts.png";
import{NavLink}from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import Library from "../../Pages/Library/Library";
function DrawerSideBar({togglDrawer,toggleDrawerSideBar}) {
  return (
    <div className="containerdrawerleftsideba"  style={toggleDrawerSideBar}>
      <div className="container2drawerleftsidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={'/'} className="iconsidebardiv">
            <p>
              <AiOutlineHome
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon"> Home</div>
            </p>
          </NavLink>
          <div className="iconsidebardiv">
            <p>
              <MdOutlineExplore
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon">EXPLORE</div>
            </p>
          </div>
          <div className="iconsidebardiv">
            <p>
              <img
                src={shorts}
                width={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon">SHORTS</div>
            </p>
          </div>
          <div className="iconsidebardiv">
            <p>
              <MdSubscriptions
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon">SUBSCRIPTION</div>
            </p>
          </div>
        </div>
        <div className="librarybtn_drwrleftsbr">
          <NavLink  to={'/Library'} className="iconsidebardiv">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon">LIBRARY</div>
            </p>
          </NavLink>
          <NavLink to={'/WatchHistory'} className="iconsidebardiv">
            <p>
              <FaHistory
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon">HISTORY</div>
            </p>
          </NavLink>
          <NavLink to={'/YourVideo'} className="iconsidebardiv">
            <p>
              <AiFillAlipaySquare
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon"> YOUR VIDEOS</div>
            </p>
          </NavLink>
          <NavLink to={'/WatchLater'}className="iconsidebardiv">
            <p>
              <MdOutlineWatchLater
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon"> WATCH LATER</div>
            </p>
          </NavLink>
          <NavLink to={'/LikedVideos'} className="iconsidebardiv">
            <p>
              <AiFillLike
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="textsidebaricon"> LIKED VIDEOS</div>
            </p>
          </NavLink>

        </div>
        <div className="subscription_ldsbar">
            <h3>YOUR SUBSCRIPTION</h3>
            <div className="chanel_lsdbar">
              <p>C</p>
              <div>CHANEL</div>
            </div>
            <div className="chanel_lsdbar">
              <p>C</p>
              <div>CHANEL</div>
            </div>
            <div className="chanel_lsdbar">
              <p>C</p>
              <div>CHANEL</div>
            </div>
            <div className="chanel_lsdbar">
              <p>C</p>
              <div>CHANEL</div>
            </div>
            <div className="chanel_lsdbar">
              <p>C</p>
              <div>CHANEL</div>
            </div>
        </div>
      </div>
      <div className="container3drawerleftsidebar"
      onClick={()=>togglDrawer()}
      ></div>
    </div>
  );
}
export default DrawerSideBar;
