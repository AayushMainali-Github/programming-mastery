import React from "react";
import { Link } from "react-router-dom";

interface Props {
  next: string;
  back: string;
}

const Bottom = (props: Props) => {
  return (
    <div className="bottom">
      <Link className="button" to={props.back}>
        Back
      </Link>
      <Link className="button" to={props.next}>
        Next
      </Link>
    </div>
  );
};

export default Bottom;
