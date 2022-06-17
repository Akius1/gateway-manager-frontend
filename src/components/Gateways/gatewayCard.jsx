import React  from "react";
import "./gateway.css";

import { Box, Typography} from "@mui/material";

import {useNavigate} from "react-router-dom";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DevicesOtherTwoToneIcon from '@mui/icons-material/DevicesOtherTwoTone';

const GroupCard = ({ item, setIsLoading}) => {
    let navigate = useNavigate()
  const handleClick = () => {
    setIsLoading(true)
  
    setTimeout(()=>{
        setIsLoading(false)
        navigate(`/doors`)
    }, 3000)
    
  };

  return (
    <div className="card" onClick={handleClick}>
      <Box className="firts-child">
        <div className="icon-box">
          <DevicesOtherTwoToneIcon color="primary" />
        </div>

        <Box className="group-detail">
          <p className="group-name">{item?.name}</p>

        </Box>
      </Box>
      {
        item.devices.length > 0 ?
        <div className="second-child">
        <Box className="door-wrapper">
         <ImportantDevicesIcon color="primary"/>
          <Typography className="door-text" color="blue">{item?.devices.length}</Typography>
        </Box>
      </div>:
      <div className="second-child">
      <Box className="door-wrapper">
       <ImportantDevicesIcon color="warning"/>
        <Typography className="door-text" color="red">{item?.devices.length}</Typography>
      </Box>
    </div>
      }

    </div>
  );
};

export default GroupCard;
