import React, { useEffect, useState } from "react";
import SplashScreen from "../../pages/auth/SplashScreen";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [Manasa,setMan]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setMan(false)
    }, 2000);
  }, [Manasa]);
  return (
    <div>
     {Manasa ? <SplashScreen/> :<>
       <div>
        <Outlet/>
       </div>
     
     </>}
    </div>
  );
};

export default Layout;
