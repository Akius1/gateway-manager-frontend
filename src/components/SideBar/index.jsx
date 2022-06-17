import React from "react";
import "./sidebar.css";

import HomeIcon from "@material-ui/icons/Home";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

import SidebarLink from "./sidebarlink";
import { NavLink } from "react-router-dom";


function Sidebar() {

  
  return (
    <div className="sidebar">
    <nav>
    <NavLink  activeClassName="link-active" className="link" to={'/'} ><SidebarLink text="Home" Icon={HomeIcon} /></NavLink >
     <NavLink activeClassName="link-active"  to={'/'} className="link"> <SidebarLink text="Gateway Device" Icon={ImportantDevicesIcon} /></NavLink >
    </nav>
      
    </div>
  );
}
export default Sidebar;
