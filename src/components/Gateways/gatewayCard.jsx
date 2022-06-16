import React  from "react";
import "./group.css";

import { Typography, Box } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";

import { connect } from "react-redux";
import { doorAction } from "../../store/actions/doors.action";
import environment from "../../environment";
import {useNavigate} from "react-router-dom";

const GroupCard = ({ item, setState, state, dispatch , setIsLoading}) => {
    let navigate = useNavigate()
  const handleClick = () => {
    setIsLoading(true)
    dispatch(
      doorAction(
        environment.domain,
        environment.email,
        environment.password,
        item?.id
      )
    );
    setState({
        isOnGroup: !state?.isOnGroup,
        groupId: item?.id
    });
    setTimeout(()=>{
        setIsLoading(false)
        navigate(`/doors`)
    }, 3000)
    
  };

  return (
    <div className="card" onClick={handleClick}>
      <Box className="firts-child">
        <div className="icon-box">
          <GroupIcon />
        </div>

        <Box className="group-detail">
          <p className="group-name">{item?.name}</p>
          <p className="group-description">
            {item?.description ? item?.description : "No group description"}
          </p>
        </Box>
      </Box>

      <div className="second-child">
        <Box className="door-wrapper">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjc4MjM1IDIuMzMzMzlDMi43ODIzNSAxLjI4NDk3IDMuNjMyMjYgMC40MzUwNTkgNC42ODA2OCAwLjQzNTA1OUgxMS4zNDczQzEyLjM5NTggMC40MzUwNTkgMTMuMjQ1NyAxLjI4NDk3IDEzLjI0NTcgMi4zMzMzOVYxMy42NjY3QzEzLjI0NTcgMTQuNzE1MSAxMi4zOTU4IDE1LjU2NTEgMTEuMzQ3MyAxNS41NjUxSDQuNjgwNjhDMy42MzIyNiAxNS41NjUxIDIuNzgyMzUgMTQuNzE1MSAyLjc4MjM1IDEzLjY2NjdWMi4zMzMzOVpNNC42ODA2OCAxLjU2NTA2QzQuMjU2MzQgMS41NjUwNiAzLjkxMjM1IDEuOTA5MDUgMy45MTIzNSAyLjMzMzM5VjEzLjY2NjdDMy45MTIzNSAxNC4wOTExIDQuMjU2MzQgMTQuNDM1MSA0LjY4MDY4IDE0LjQzNTFIMTEuMzQ3M0MxMS43NzE3IDE0LjQzNTEgMTIuMTE1NyAxNC4wOTExIDEyLjExNTcgMTMuNjY2N1YyLjMzMzM5QzEyLjExNTcgMS45MDkwNSAxMS43NzE3IDEuNTY1MDYgMTEuMzQ3MyAxLjU2NTA2SDQuNjgwNjhaIiBmaWxsPSIjQkEzNTE3Ii8+CjxwYXRoIGQ9Ik0xMC4wMTQgNy41QzEwLjAxNCA3LjIyMzg2IDEwLjIzNzkgNyAxMC41MTQgN0gxMC42NDRDMTAuOTIwMiA3IDExLjE0NCA3LjIyMzg2IDExLjE0NCA3LjVWOC41QzExLjE0NCA4Ljc3NjE0IDEwLjkyMDIgOSAxMC42NDQgOUgxMC41MTRDMTAuMjM3OSA5IDEwLjAxNCA4Ljc3NjE0IDEwLjAxNCA4LjVWNy41WiIgZmlsbD0iI0JBMzUxNyIvPgo8L3N2Zz4K"
            alt="door"
          />
          <Typography className="door-text">{item?.locksCount}</Typography>
        </Box>
        <Box className="door-wrapper">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzExNjkgMTIuMzUwOFYxMS4zMTE4QzkuMzExNjkgMTAuMTY0MiA4LjM4MTM3IDkuMjMzODkgNy4yMzM3NyA5LjIzMzg5SDMuMDc3OTJDMS45MzAzMiA5LjIzMzg5IDEgMTAuMTY0MiAxIDExLjMxMThWMTIuMzUwOCIgc3Ryb2tlPSIjQkEzNTE3IiBzdHJva2Utd2lkdGg9IjEuMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI1LjE1NTg2IiBjeT0iNS4wNzc5MiIgcj0iMi4wNzc5MiIgc3Ryb2tlPSIjQkEzNTE3IiBzdHJva2Utd2lkdGg9IjEuMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTIuNDI4NiAxMi4zNTA2VjExLjMxMTdDMTIuNDI3OSAxMC4zNjQ3IDExLjc4NyA5LjUzODAxIDEwLjg3MDEgOS4zMDEyNyIgc3Ryb2tlPSIjQkEzNTE3IiBzdHJva2Utd2lkdGg9IjEuMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTUuMzUwNyAxMi4zNTA2VjExLjMxMTdDMTUuMzUgMTAuMzY0NyAxNC43MDkxIDkuNTM4MDEgMTMuNzkyMiA5LjMwMTI3IiBzdHJva2U9IiNCQTM1MTciIHN0cm9rZS13aWR0aD0iMS4xMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04Ljc5MjI0IDMuMDY3NjNDOS43MTE2NyAzLjMwMzA0IDEwLjM1NDggNC4xMzE1MiAxMC4zNTQ4IDUuMDgwNjFDMTAuMzU0OCA2LjAyOTcxIDkuNzExNjcgNi44NTgxOSA4Ljc5MjI0IDcuMDkzNiIgc3Ryb2tlPSIjQkEzNTE3IiBzdHJva2Utd2lkdGg9IjEuMTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNzE0MyAzLjA2NzYzQzEyLjYzMzcgMy4zMDMwNCAxMy4yNzY4IDQuMTMxNTIgMTMuMjc2OCA1LjA4MDYxQzEzLjI3NjggNi4wMjk3MSAxMi42MzM3IDYuODU4MTkgMTEuNzE0MyA3LjA5MzYiIHN0cm9rZT0iI0JBMzUxNyIgc3Ryb2tlLXdpZHRoPSIxLjEzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
            alt="user"
          />
          <Typography className="door-text">{item?.membersCount}</Typography>
        </Box>
      </div>
    </div>
  );
};

export default connect((state) => ({
  user: state.user_reducer,
  locks: state.locks_reducer,
  groupLocks: state.door_reducer,
}))(GroupCard);
