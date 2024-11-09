import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <title>
        Programming Mastery |{" "}
        {location.pathname === "/" ? "Languages" : location.pathname.startsWith("/javascript") ? "Javascript" : location.pathname.startsWith("/python") ? "Python" : ""}
      </title>
      <Outlet />
    </>
  );
};

export default Layout;
