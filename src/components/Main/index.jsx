import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import "./main.css";
import environment from "../../environment";
import { connect } from "react-redux";
import { userAction } from "../../store/actions/user.action";
import { groupAction } from "../../store/actions/groups.action";

import GatewayLayout from "../Gateways/GatewayLayout";
const Main = ({ user, groups, dispatch }) => {
  const [state, setState] = useState({
    isOnGroup: true,
    groupId: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(
      userAction(environment.domain, environment.email, environment.password)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { response } = user;

  useEffect(() => {
    if (response.email) {
      setIsLoading(true);
      dispatch(
        groupAction(environment.domain, environment.email, environment.password)
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log('group', groups);

  return (
    <Box className="main">
      <div className="title-style">
        {state?.isOnGroup ? (
          <p className="group-count">
            Groups <span> {groups?.response?.pagination.count}</span>
          </p>
        ) : (
          <p className="group-count">test</p>
        )}

        <p className="group-count-detail">
          add users to group and assign different access right
        </p>
      </div>

      <GatewayLayout
        groups={groups}
        state={state}
        setState={setState}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </Box>
  );
};

export default connect((state) => ({
  user: state.user_reducer,
  groups: state.groups_reducer,
}))(Main);
