import React from "react";
import Laptop from "../../Assets/bg.png";
import Javascript from "../../Assets/Home/javascript.png";
import Python from "../../Assets/Home/python.png";
import C from "../../Assets/Home/c.png";
import Cpp from "../../Assets/Home/cpp.png";
import Css from "../../Assets/Home/css.png";
import Html from "../../Assets/Home/html.png";
import Java from "../../Assets/Home/java.png";
import Nodejs from "../../Assets/Home/nodejs.png";
import Sql from "../../Assets/Home/sql.png";
import Typescript from "../../Assets/Home/typescript.png";
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
        <Item image={Html} title="HTML" link="html" />
        <Item image={Css} title="CSS" link="css" />
        <Item image={Javascript} title="Javascript" link="javascript" />
        <Item image={Nodejs} title="Node JS" link="nodejs" />
        <Item image={Typescript} title="Typescript" link="typescript" />
        <Item image={Python} title="Python" link="python" />
        <Item image={C} title="C" link="c" />
        <Item image={Cpp} title="C++" link="cpp" />
        <Item image={Java} title="Java" link="java" />
        <Item image={Sql} title="SQL" link="sql" />
      </div>
    </div>
  );
};

export default Home;
