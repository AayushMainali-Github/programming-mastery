import React from "react";
import Laptop from "../../Assets/bg.png";
import Javascript from "../../Assets/Home/javascript.png";
import Python from "../../Assets/Home/python.png";
import Item from "../../Components/Item";

const Home = () => {
  return (
    <div className="home">
      <img className="img" alt="Laptop" src={Laptop}></img>
      <div className="info">
        <div className="title">Code Your Future: Learn, Build, Succeed.</div>
        <div className="desc">
          Programming Mastery is your go-to platform for learning programming through interactive lessons, real-world projects, and expert guidance. Empower your skills and master
          coding with ease.
        </div>
      </div>
      <div className="header">Languages</div>
      <div className="items">
        <Item image={Javascript} title="Javascript" link="javascript" />
        <Item image={Python} title="Python" link="python" />
      </div>
    </div>
  );
};

export default Home;
