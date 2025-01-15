import React from "react";
import { Link } from "react-router-dom";

const Maintenance = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#171712",
        color: "white",
        fontSize: 24,
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      This page is under maintenance 🚧
      <Link
        style={{
          color: "rgb(171, 25, 255)",
        }}
        to={"/"}
      >
        Go Back
      </Link>
    </div>
  );
};

export default Maintenance;
