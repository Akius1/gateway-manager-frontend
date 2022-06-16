import React from "react";
import { connect } from "react-redux";
import { Box, TextField } from "@material-ui/core";
import "./group.css";
import "../Device/doors.css";
import { useStyle } from "../../style/style";
import GroupCard from "./gatewayCard";
import CustomizedProgressBars from "../CircularProgressBar";
import Button from "@mui/material/Button";
import { groupAction } from "../../store/actions/groups.action";
import environment from "../../environment";
import { Typography } from "@mui/material";

const GroupDoors = ({
  isLoading,
  groups,
  setState,
  state,
  setIsLoading,
  dispatch,
}) => {
  const classes = useStyle();
  console.log(groups);

  let groupData = groups?.response?.data;

  let paginationDetail = groups?.response?.pagination;
  let offSet = (count) => {
    if (count <= 10) {
      return 0;
    } else if (count > 10 && count <= 20) {
      return 10;
    } else if (count > 20 && count <= 30) {
      return 20;
    }
  };

  let maxPage = Math.ceil(paginationDetail?.count / 10);
  let currentPage = Math.floor(1 + paginationDetail?.offset / 10);
  console.log("page", currentPage);

  const nextPage = () => {
    setIsLoading(true);
    dispatch(
      groupAction(
        environment.domain,
        environment.email,
        environment.password,
        offSet(paginationDetail?.count)
      )
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const prevPage = () => {
    setIsLoading(true);
    dispatch(
      groupAction(
        environment.domain,
        environment.email,
        environment.password,
        offSet(paginationDetail?.count) - 10
      )
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Box className="groups">
      <div className="search-wrapper">
        <TextField
          placeholder="search groups"
          variant="outlined"
          InputProps={{
            className: classes.input,
          }}
        />
        <Button
          children="add group"
          variant="outlined"
          sx={{
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontStretch: "normal",
            letterSpacing: "normal",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 400,
            textTransform: "capitalize",
            color: "rgb(74, 82, 255)",
          }}
        />
      </div>

      <Box className="group-container">
        {isLoading ? (
          <CustomizedProgressBars />
        ) : groupData?.length ? (
          groupData?.map((item) => (
            <GroupCard
              key={item?.id}
              item={item}
              setState={setState}
              state={state}
              setIsLoading={setIsLoading}
            />
          ))
        ) : (
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiByeD0iMTUiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzQuNjg3NSA5Mi4zODY0QzM0LjY4NzUgODQuODA4MiA0MC44MzA5IDc4LjY2NDkgNDguNDA5MSA3OC42NjQ5SDcwLjIyNzNDNzcuODA1NSA3OC42NjQ5IDgzLjk0ODkgODQuODA4MiA4My45NDg5IDkyLjM4NjRWOTcuODQxQzgzLjk0ODkgOTkuMzk0MyA4Mi42ODk3IDEwMC42NTMgODEuMTM2NCAxMDAuNjUzQzc5LjU4MzEgMTAwLjY1MyA3OC4zMjM5IDk5LjM5NDMgNzguMzIzOSA5Ny44NDFWOTIuMzg2NEM3OC4zMjM5IDg3LjkxNDggNzQuNjk4OSA4NC4yODk5IDcwLjIyNzMgODQuMjg5OUg0OC40MDkxQzQzLjkzNzUgODQuMjg5OSA0MC4zMTI1IDg3LjkxNDggNDAuMzEyNSA5Mi4zODY0Vjk3Ljg0MUM0MC4zMTI1IDk5LjM5NDMgMzkuMDUzMyAxMDAuNjUzIDM3LjUgMTAwLjY1M0MzNS45NDY3IDEwMC42NTMgMzQuNjg3NSA5OS4zOTQzIDM0LjY4NzUgOTcuODQxVjkyLjM4NjRaIiBmaWxsPSIjMTkxOTE5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTkuMzE4OCA1MS41NjI1QzU0Ljg0NzEgNTEuNTYyNSA1MS4yMjIyIDU1LjE4NzUgNTEuMjIyMiA1OS42NTkxQzUxLjIyMjIgNjQuMTMwNyA1NC44NDcxIDY3Ljc1NTcgNTkuMzE4OCA2Ny43NTU3QzYzLjc5MDQgNjcuNzU1NyA2Ny40MTU0IDY0LjEzMDcgNjcuNDE1NCA1OS42NTkxQzY3LjQxNTQgNTUuMTg3NSA2My43OTA0IDUxLjU2MjUgNTkuMzE4OCA1MS41NjI1Wk00NS41OTcyIDU5LjY1OTFDNDUuNTk3MiA1Mi4wODA5IDUxLjc0MDUgNDUuOTM3NSA1OS4zMTg4IDQ1LjkzNzVDNjYuODk3IDQ1LjkzNzUgNzMuMDQwNCA1Mi4wODA5IDczLjA0MDQgNTkuNjU5MUM3My4wNDA0IDY3LjIzNzMgNjYuODk3IDczLjM4MDcgNTkuMzE4OCA3My4zODA3QzUxLjc0MDUgNzMuMzgwNyA0NS41OTcyIDY3LjIzNzMgNDUuNTk3MiA1OS42NTkxWiIgZmlsbD0iIzE5MTkxOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg2LjU5NDQgODEuMTI4M0M4Ni45ODI3IDc5LjYyNDMgODguNTE2NyA3OC43MTk5IDkwLjAyMDcgNzkuMTA4MkM5Ni4wNzUzIDgwLjY3MTUgMTAwLjMwNyA4Ni4xMzA3IDEwMC4zMTIgOTIuMzgzOUwxMDAuMzEyIDk3Ljg0MDVDMTAwLjMxMiA5OS4zOTM4IDk5LjA1MjcgMTAwLjY1MyA5Ny40OTk0IDEwMC42NTNDOTUuOTQ2MSAxMDAuNjUzIDk0LjY4NjkgOTkuMzkzOCA5NC42ODY5IDk3Ljg0MDVWOTIuMzg3Qzk0LjY4MzYgODguNjk3NyA5Mi4xODY3IDg1LjQ3NyA4OC42MTQ1IDg0LjU1NDZDODcuMTEwNSA4NC4xNjYzIDg2LjIwNjEgODIuNjMyMyA4Ni41OTQ0IDgxLjEyODNaIiBmaWxsPSIjMTkxOTE5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAxLjkzNyA4MS4xMjgzQzEwMi4zMjUgNzkuNjI0MyAxMDMuODU5IDc4LjcxOTkgMTA1LjM2MyA3OS4xMDgyQzExMS40MTggODAuNjcxNSAxMTUuNjUgODYuMTMwNyAxMTUuNjU1IDkyLjM4MzlMMTE1LjY1NSA5Ny44NDA1QzExNS42NTUgOTkuMzkzOCAxMTQuMzk1IDEwMC42NTMgMTEyLjg0MiAxMDAuNjUzQzExMS4yODkgMTAwLjY1MyAxMTAuMDMgOTkuMzkzOCAxMTAuMDMgOTcuODQwNVY5Mi4zODdDMTEwLjAyNiA4OC42OTc3IDEwNy41MjkgODUuNDc3IDEwMy45NTcgODQuNTU0NkMxMDIuNDUzIDg0LjE2NjMgMTAxLjU0OSA4Mi42MzIzIDEwMS45MzcgODEuMTI4M1oiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03NS42ODU3IDQ4LjQwNzRDNzYuMDcxIDQ2LjkwMjYgNzcuNjAzMiA0NS45OTUxIDc5LjEwOCA0Ni4zODA0Qzg1LjE3OTUgNDcuOTM0OSA4OS40MjYxIDUzLjQwNTggODkuNDI2MSA1OS42NzMyQzg5LjQyNjEgNjUuOTQwNSA4NS4xNzk1IDcxLjQxMTQgNzkuMTA4IDcyLjk2NkM3Ny42MDMyIDczLjM1MTIgNzYuMDcxIDcyLjQ0MzcgNzUuNjg1NyA3MC45MzlDNzUuMzAwNSA2OS40MzQyIDc2LjIwOCA2Ny45MDIgNzcuNzEyNyA2Ny41MTY3QzgxLjI5NTMgNjYuNTk5NSA4My44MDExIDYzLjM3MTMgODMuODAxMSA1OS42NzMyQzgzLjgwMTEgNTUuOTc1IDgxLjI5NTMgNTIuNzQ2OSA3Ny43MTI3IDUxLjgyOTZDNzYuMjA4IDUxLjQ0NDMgNzUuMzAwNSA0OS45MTIxIDc1LjY4NTcgNDguNDA3NFoiIGZpbGw9IiMxOTE5MTkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05MS4wMjYxIDQ4LjQwNzRDOTEuNDExMyA0Ni45MDI2IDkyLjk0MzUgNDUuOTk1MSA5NC40NDgzIDQ2LjM4MDRDMTAwLjUyIDQ3LjkzNDkgMTA0Ljc2NiA1My40MDU4IDEwNC43NjYgNTkuNjczMkMxMDQuNzY2IDY1Ljk0MDUgMTAwLjUyIDcxLjQxMTQgOTQuNDQ4MyA3Mi45NjZDOTIuOTQzNSA3My4zNTEyIDkxLjQxMTMgNzIuNDQzNyA5MS4wMjYxIDcwLjkzOUM5MC42NDA4IDY5LjQzNDIgOTEuNTQ4MyA2Ny45MDIgOTMuMDUzMSA2Ny41MTY3Qzk2LjYzNTYgNjYuNTk5NSA5OS4xNDE0IDYzLjM3MTMgOTkuMTQxNCA1OS42NzMyQzk5LjE0MTQgNTUuOTc1IDk2LjYzNTYgNTIuNzQ2OSA5My4wNTMxIDUxLjgyOTZDOTEuNTQ4MyA1MS40NDQzIDkwLjY0MDggNDkuOTEyMSA5MS4wMjYxIDQ4LjQwNzRaIiBmaWxsPSIjMTkxOTE5Ii8+Cjwvc3ZnPgo="
            alt="empty group"
          />
        )}
      </Box>

      <Box className="pagination" sx={{ "& button": { m: 1 } }}>
        <Button
          variant="text"
          disabled={
            paginationDetail?.count <= 10 || paginationDetail?.offset < 10
          }
          sx={{
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontStretch: "normal",
            letterSpacing: "normal",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 400,
            textTransform: "none",
            color: "rgb(74, 82, 255)",
          }}
          onClick={prevPage}
        >
          Previous Page
        </Button>
        <Typography sx={{
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontStretch: "normal",
              letterSpacing: "normal",
             color:"#191919",
             fontSize: "12px",
             lineHeight: "18px",
             fontWeight: 400,
             textTransform: "none",
        }}>
          Page {currentPage} of {maxPage}
        </Typography>
        <Button
          disabled={
            paginationDetail?.count <= 10 ||
            offSet(paginationDetail?.count) === 0 ||
            groups?.response?.data?.length < 10
          }
          sx={{
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontStretch: "normal",
            letterSpacing: "normal",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 400,
            textTransform: "none",
            color: "rgb(74, 82, 255)",
          }}
          onClick={nextPage}
        >
          Next Page
        </Button>
      </Box>
    </Box>
  );
};

export default connect((state) => ({
  groups: state.groups_reducer,
}))(GroupDoors);
