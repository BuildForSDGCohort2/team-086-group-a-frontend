import React from "react";
import { Route } from "react-router-dom";

const UnProtectedRoutes = (props) => {
  return (
    <div>
      <Route {...props} />
    </div>
  );
};
export default UnProtectedRoutes;
