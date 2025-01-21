import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const paths: Record<string, string> = {
  "": "Languages",
  html: "HTML",
  css: "CSS",
  javascript: "Javascript",
  nodejs: "Node JS",
  typescript: "Typescript",
  python: "Python",
  c: "C",
  cpp: "C++",
  java: "Java",
  sql: "SQL",
};

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <title>Programming Mastery | {paths[location.pathname.split("/")[1]] || "Not Found"}</title>
      <Outlet />
    </>
  );
};

export default Layout;
