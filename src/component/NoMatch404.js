import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const NoMatch404 = () => {
  let location = useLocation();
  return (
    <div className="error-page">
      <h3>
        No Match for <code>{location.pathname}</code>
        
      </h3>
      <h6>Please Try going {<NavLink to="/"> HOME</NavLink>}</h6>
    </div>
  );
};

export default NoMatch404;
