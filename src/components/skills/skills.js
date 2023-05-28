import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "./html.png"
import css from "./css.png"
import js from "./js.png"
import django from "./django.jpg"
import mysql from "./mysql.png"
import jquery from "./jquery.png"
import bootstrap from "./bootstrap.png"
import c from "./c.jpg"
import cpp from "./c++.png"
import dsa from "./dsa.png"
import './skills.css'

export function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills " id="skills">
      <div className="container">
        <div className="row">
          <div className="col">
              <div className="skill-bx">
                <h2> Skills </h2>
                < Carousel className=" Carousel skill-slider" responsive={responsive} infinite={true}>

<div className="item">
    <img className="img-fluid logo " src={html} alt="Html" />
    <h5> HTML </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser</p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={css}  alt="Css" />
    <h5> CSS </h5>
    <div className="container c ">
        <div className="card ">
            <div className="card-body">
                <p>  Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML </p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={js}  alt="JavaScriprt" />
    <h5> JavaScript </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p>  JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more </p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={django}  alt="Django" />
    <h5> Django </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p> Django is a high-level Python web framework that enables rapid development of secure and maintainable websites </p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={cpp}  alt="C++" />
    <h5> C++ </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p> C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications</p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={dsa}  alt="DSA" />
    <h5> Data Structures and Algorithm </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p>A data structure is a method of organizing data in a virtual system. An algorithm is a sequence of steps executed by a computer that takes an input and transforms it into a target output</p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={c}  alt="C" />
    <h5> C </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p> The C programming language is a procedural and general-purpose language that provides low-level access to system memory </p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={mysql}  alt="MySQL" />
    <h5> MySQL </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p>  is an Oracle-backed open source relational database management system (RDBMS) based on Structured Query Language (SQL) </p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={bootstrap}  alt="Bootstrap" />
    <h5> Bootstrap </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p> Bootstrap is a free, open source front-end development framework for the creation of websites and web apps</p>
            </div>
        </div>
    </div>
</div>

<div className="item">
    <img className="img-fluid logo " src={jquery}  alt="jQuery" />
    <h5> jQuery </h5>
    <div className="container c">
        <div className="card">
            <div className="card-body">
                <p> jQuery is an open-sourced JavaScript library that simplifies creation and navigation of web applications </p>
            </div>
        </div>
    </div>
</div>


                </ Carousel>
<div>
   
</div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
