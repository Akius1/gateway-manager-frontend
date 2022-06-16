import React from "react";
import "./sidebar.css";

import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import SidebarLink from "./sidebarlink";
import { NavLink } from "react-router-dom";

function Sidebar() {
  
  return (
    <div className="sidebar">
    <nav>
    <NavLink  activeClassName="link-active" className="link" to={'/'}><SidebarLink text="Home" Icon={HomeIcon}  /></NavLink >
     
     <NavLink to={'/'} className="link"><SidebarLink text="User" Icon={PermIdentityIcon} /></NavLink>
     <NavLink activeClassName="link-active"  to={'/'} className="link"> <SidebarLink text="Group" Icon={GroupIcon} /></NavLink >
    </nav>
      
    </div>
  );
}
export default Sidebar;
