import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch404 = () => {
  let location = useLocation();
  return (
    <div>
      <h3>
        No Match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default NoMatch404;
