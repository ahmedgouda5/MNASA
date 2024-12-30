import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
 const [Token,setToken]=useState(false) 

 if (Token) {
    return children;
  } else {
    return <Navigate to="/auth/signup" />;
  }
}
export default ProtectRoute;
