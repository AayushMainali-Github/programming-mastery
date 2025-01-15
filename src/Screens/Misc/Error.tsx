import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
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
      404 Not Found ⚠️
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

export default Error;
