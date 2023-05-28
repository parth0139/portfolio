import "./about.css";

export function About(){

    return (
        <section className="about" id="about">
<div className="container">
    <h2 className="fw-bold ">About</h2>
    <div className="row">
        <div className="col">
            
            <div className="col-sm-12 col-md-10 col-xl-10 col-xs-12 my-2  mx-auto">
<p className="font-monospace">
   <span className="float-start"> <strong>Hello there ,  </strong></span>
    <br></br>
    <br></br>
   
My name is Parth Sarthi Roy. I am from begusarai district of bihar. I recently graduated with a <b>B.Tech </b>degree in <b>Computer Science
   and Engineering </b>from <b>Lakshmi Narain College of Technology(LNCT)</b>  , Bhopal. I am passionate and
   determined to my works. Along with that, I am very eager to acquire knowledge about new concepts in the field of technology.
 Among the technologies I have learned my favourites are C++ , Django , MySQL and Data Structures. I have interest in coding as well 
 as in web development. In my free time I love to watch movies and play cricket. 
   
</p>
            </div>

            </div>
            </div>
</div>


<div className="container mt-2">
    <h2  className="fw-bold mb-3">Education</h2>
    <div className="row ">
        <div className="col d-flex flex-wrap">
        
        <div className="col-sm-4 col-md-4 col-xl-4 col-xs-10 my-2  ed mx-auto">

            <h3> AISSE </h3>
            <br></br>
            <p>D.A.V Public School </p>
            <p>Passing Year: 2016</p>
            <p>Score: 10 CGPA</p>

</div>

<div className="col-sm-4 col-md-4 col-xl-4 col-xs-10 my-2 ed mx-auto ">

<h3> AISSCE </h3>
<br></br>
<p>B.R D.A.V Public School </p>
<p>Passing Year: 2018</p>
<p>Score: 87% </p>

</div>

<div className="col-sm-4 col-md-4 col-xl-4 col-xs-10 my-2 ed mx-auto">

<h3> B.Tech (CSE) </h3>
<br></br>
<p>LNCT Bhopal </p>
<p>Passing Year: 2023</p>
<p>Score: 9.14 CGPA</p>

</div>

        </div>
    </div>
</div>

</section>
    );


}