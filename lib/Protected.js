import React from "react";
import {Route, Redirect} from "./index";

function Protected({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        localStorage.getItem("login") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname }
            }}
          />
        );
      }}
    />
  );
}

export default Protected;
