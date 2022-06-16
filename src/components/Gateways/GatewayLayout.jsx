import React from "react";
import { connect } from "react-redux";

import {  Routes, Route } from "react-router-dom";
import GroupDoors from "./GatewayDoors";
import Locks from "../Doors/Locks";

const GroupLayout = ({
  state,
  setState,
  groupLocks,
  isLoading,
  setIsLoading,
}) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <GroupDoors
            isLoading={isLoading}
            setState={setState}
            state={state}
            setIsLoading={setIsLoading}
          />
        }
      />

      <Route
        exact
        path="/doors"
        element={
          <Locks
            isLoading={isLoading}
            groupLocks={groupLocks}
            setState={setState}
            state={state}
            setIsLoading={setIsLoading}
          />
        }
      />
    </Routes>
  );
};

export default connect((state) => ({
  user: state.user_reducer,
  groupLocks: state.door_reducer,
}))(GroupLayout);
