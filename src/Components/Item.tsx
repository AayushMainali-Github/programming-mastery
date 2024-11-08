import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  image: string;
}

const Item = (props: Props) => {
  return (
    <Link className="link" to={props.link}>
      <img src={props.image} alt={props.title} />
      <div>{props.title}</div>
    </Link>
  );
};

export default Item;
