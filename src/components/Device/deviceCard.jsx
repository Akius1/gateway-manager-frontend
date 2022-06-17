import React from "react";
import { Box } from "@material-ui/core";
import "./device.css";
import { connect } from "react-redux";
import { getGatewayById, removeDeviceFromGateway } from "../../store/actions/gateway.action";

const DeviceCard = ({ item, dispatch, setIsLoading,state }) => {
  const deleteGroupDoor = () => {
    setIsLoading(true)
    dispatch(removeDeviceFromGateway(state._id, item.id))
   
    setTimeout(() => {
      dispatch(getGatewayById(state._id))
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Box className="right-side">
      <Box className="door-name">
        <img
          className="door-image"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0YwRjJGNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1IDExLjVIMTVDMTQuNzIzOSAxMS41IDE0LjUgMTEuNzIzOSAxNC41IDEyVjI5QzE0LjUgMjkuMjc2MSAxNC43MjM5IDI5LjUgMTUgMjkuNUgyNUMyNS4yNzYxIDI5LjUgMjUuNSAyOS4yNzYxIDI1LjUgMjlWMTJDMjUuNSAxMS43MjM5IDI1LjI3NjEgMTEuNSAyNSAxMS41Wk0xNSAxMEMxMy44OTU0IDEwIDEzIDEwLjg5NTQgMTMgMTJWMjlDMTMgMzAuMTA0NiAxMy44OTU0IDMxIDE1IDMxSDI1QzI2LjEwNDYgMzEgMjcgMzAuMTA0NiAyNyAyOVYxMkMyNyAxMC44OTU0IDI2LjEwNDYgMTAgMjUgMTBIMTVaIiBmaWxsPSIjMTkxOTE5Ii8+CjxyZWN0IHg9IjIzIiB5PSIxOSIgd2lkdGg9IjEuNSIgaGVpZ2h0PSIzIiByeD0iMC43NSIgZmlsbD0iIzE5MTkxOSIvPgo8L3N2Zz4K"
          alt="door"
        />
        <Box className="group-detail">
          <p className="group-name">{item?.vendor}</p>
          <p className="group-description">
            {item?.lock?.description
              ? item?.lock?.description
              : "Test Place No description"}
          </p>
        </Box>
      </Box>
      <Box className="img-wrapper">
        {
          item.status === "online"?
          <Box className="time">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDExLjUyMSAzIEMgOC4xMDggMy4zODUgNS4xOCA1Ljg0NiA1LjE4IDkuMzQyIEMgNS4xOCAxMC4yNTkgNS4zNjcgMTEuMTI1IDUuNzMyIDExLjkyMyBDIDcuMjk4IDE1LjM1IDEwLjE2NSAxOC45OSAxMS41MjIgMjAuNjE3IEMgMTIuODc4IDE4Ljk5IDE1Ljc0NSAxNS4zNSAxNy4zMTIgMTEuOTIzIEMgMjAuMjk3IDcuNzc2IDE0LjkzNCAyLjYxNSAxMS41MjEgMyBaIE0gMTcuNzMzIDEwLjk2MyBDIDE3Ljc0NiAxMS4wMyAxNy41NDUgMTEuNzkyIDE3LjE2OCAxMi4zMTUgTCAxNy43MzMgMTAuOTYzIFoiIHN0cm9rZT0iIzQwNDA0MCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS41MjE0IDExLjkxODhDMTAuMTAwMyAxMS45MTg4IDguOTQ0MDMgMTAuNzYyNSA4Ljk0NDAzIDkuMzQxNDNDOC45NDQwMyA3LjkyMDE5IDEwLjEwMDMgNi43NjM5MiAxMS41MjE0IDYuNzYzOTJDMTIuOTQyNSA2Ljc2MzkyIDE0LjA5ODggNy45MjAxOSAxNC4wOTg4IDkuMzQxNDNDMTQuMDk4OSAxMC43NjI1IDEyLjk0MjcgMTEuOTE4OCAxMS41MjE0IDExLjkxODhaIiBmaWxsPSIjNDA0MDQwIi8+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNCIgZmlsbD0iIzRBNTJGRiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuMTY4OCAxOS4wMzA3QzIyLjM0MzcgMTguODQ3NyAyMi4zNDM3IDE4LjU1MSAyMi4xNjg4IDE4LjM2OEMyMS45OTM5IDE4LjE4NSAyMS43MTAyIDE4LjE4NSAyMS41MzUzIDE4LjM2OEwxOS4zMjM1IDIwLjY4MThMMTguNDY0NyAxOS43ODM0QzE4LjI4OTggMTkuNjAwMyAxOC4wMDYyIDE5LjYwMDMgMTcuODMxMiAxOS43ODM0QzE3LjY1NjMgMTkuOTY2NCAxNy42NTYzIDIwLjI2MzEgMTcuODMxMiAyMC40NDYxTDE4Ljk2NDcgMjEuNjMxOUMxOS4wNjI5IDIxLjczNDYgMTkuMTk1MyAyMS43Nzk3IDE5LjMyMzUgMjEuNzY3MUMxOS40NTE4IDIxLjc3OTcgMTkuNTg0MiAyMS43MzQ2IDE5LjY4MjQgMjEuNjMxOUwyMi4xNjg4IDE5LjAzMDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
            alt="restriction"
          />
        </Box>:
         <Box className="time">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC4zIj4KPHBhdGggZD0iTSAxMS41MjEgMyBDIDguMTA4IDMuMzg1IDUuMTggNS44NDYgNS4xOCA5LjM0MiBDIDUuMTggMTAuMjU5IDUuMzY3IDExLjEyNSA1LjczMiAxMS45MjMgQyA3LjI5OCAxNS4zNSAxMC4xNjUgMTguOTkgMTEuNTIyIDIwLjYxNyBDIDEyLjg3OCAxOC45OSAxNS43NDUgMTUuMzUgMTcuMzEyIDExLjkyMyBDIDIwLjI5NyA3Ljc3NiAxNC45MzQgMi42MTUgMTEuNTIxIDMgWiBNIDE3LjczMyAxMC45NjMgQyAxNy43NDYgMTEuMDMgMTcuNTQ1IDExLjc5MiAxNy4xNjggMTIuMzE1IEwgMTcuNzMzIDEwLjk2MyBaIiBzdHJva2U9IiM3MTcwNkUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjUyMTQgMTEuOTE4OEMxMC4xMDAzIDExLjkxODggOC45NDQwMyAxMC43NjI1IDguOTQ0MDMgOS4zNDE0M0M4Ljk0NDAzIDcuOTIwMTkgMTAuMTAwMyA2Ljc2MzkyIDExLjUyMTQgNi43NjM5MkMxMi45NDI1IDYuNzYzOTIgMTQuMDk4OCA3LjkyMDE5IDE0LjA5ODggOS4zNDE0M0MxNC4wOTg5IDEwLjc2MjUgMTIuOTQyNyAxMS45MTg4IDExLjUyMTQgMTEuOTE4OFoiIGZpbGw9IiM3MTcwNkUiLz4KPC9nPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSI0IiBmaWxsPSIjNzE3MDZFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEuODcwNyAxOC4xMjkzQzIyLjA0MzEgMTguMzAxNyAyMi4wNDMxIDE4LjU4MTIgMjEuODcwNyAxOC43NTM2TDE4Ljc1MzYgMjEuODcwN0MxOC41ODEyIDIyLjA0MzEgMTguMzAxNyAyMi4wNDMxIDE4LjEyOTMgMjEuODcwN0MxNy45NTY5IDIxLjY5ODMgMTcuOTU2OSAyMS40MTg4IDE4LjEyOTMgMjEuMjQ2NEwyMS4yNDY0IDE4LjEyOTNDMjEuNDE4OCAxNy45NTY5IDIxLjY5ODMgMTcuOTU2OSAyMS44NzA3IDE4LjEyOTNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjEyOTMgMTguMTI5M0MxNy45NTY5IDE4LjMwMTcgMTcuOTU2OSAxOC41ODEyIDE4LjEyOTMgMTguNzUzNkwyMS4yNDY0IDIxLjg3MDdDMjEuNDE4OCAyMi4wNDMxIDIxLjY5ODMgMjIuMDQzMSAyMS44NzA3IDIxLjg3MDdDMjIuMDQzMSAyMS42OTgzIDIyLjA0MzEgMjEuNDE4OCAyMS44NzA3IDIxLjI0NjRMMTguNzUzNiAxOC4xMjkzQzE4LjU4MTIgMTcuOTU2OSAxOC4zMDE3IDE3Ljk1NjkgMTguMTI5MyAxOC4xMjkzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="  alt="No resriction"/>
       </Box>
        }
       

        <img
          onClick={deleteGroupDoor}
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAzQzkuNDQ3NzIgMyA5IDMuNDQ3NzIgOSA0SDVWNkgxOVY0SDE1QzE1IDMuNDQ3NzIgMTQuNTUyMyAzIDE0IDNIMTBaTTYgN0gxOFYxOEMxOCAxOS42NTY5IDE2LjY1NjkgMjEgMTUgMjFIOUM3LjM0MzE1IDIxIDYgMTkuNjU2OSA2IDE4VjdaIiBmaWxsPSIjNzE3MDZFIi8+Cjwvc3ZnPgo="
          alt="delete"
        />
      </Box>

     
    </Box>
  );
};

export default connect((state) => ({
  locks: state.locks_reducer,
  user: state.user_reducer,
  groupLocks: state.door_reducer,
}))(DeviceCard);
