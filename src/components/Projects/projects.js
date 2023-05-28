import "./project.css";


export function Projects(){

return (
 
 <section className="projects" id="projects">
<div className="container">
    <h1>Projects</h1>
    <div className="row">
{/* <div className="d-flex"> */}
<div className="  col-sm-12 col-md-6 col-xl-6 col-xs-12 my-2 ">
<div className="card p-item">
<div className="card-body bg" >
        <h3>Music Player Clone</h3>
        <p> It is a simple music player webpage which is made using 
           <b> HTML </b> ,<b> CSS </b> , <b>JS </b>. I made this project when I was starting 
            my web development journey . In this user can play , pause ,forward and backward songs. </p>
            </div></div>
    </div>

    <div className="col-sm-12 col-md-6 col-xl-6 col-xs-12 my-2">
<div className="card p-item">
<div className="card-body bg">
        <h3>Ecommerce Site</h3>
        <p> It is a full fledged ecommerce site which is made using 
           <b> HTML </b> ,<b> CSS </b> , <b>JS </b> , <b>Bootstrap</b> , <b>Django</b> , <b>jQuery </b> and <b>Ajax</b>.
            I made this project when I was learning django.
           This site contains authentication and user can add, delete from cart
           and place order by adding address. </p>

<button className="btn-light mx-2 my-1" ><a className="git" href="https://github.com/parth0139/eShop" rel="noreferrer" target="_blank"> Know More </a></button>
<button className="btn-light mx-2 my-1" ><a href="https://psroy0139.pythonanywhere.com/" rel="noreferrer" target="_blank"> Go to site </a></button>

            </div></div>
    </div>

    <div className="col-sm-12 col-md-6 col-xl-6 col-xs-12 my-2">
<div className="card p-item">
<div className="card-body bg">
        <h3>Personal Portfolio</h3>
        <p> The website you are seeing right now is this one . It is my personal portfolio which is made using
           <b> HTML </b> ,<b> CSS </b> , <b>JS </b> , <b>Bootstrap</b> and <b>React</b>. 
           I made this project when I started 
           learning React Js . It cantains information about me 
           and is an easy way to contact me .</p>

           <button className="btn-light mx-2 my-1" ><a className="git" href="https://github.com/parth0139/portfolio" rel="noreferrer" target="_blank"> Know More </a></button>


            </div></div>
    </div>
    
   
   </div> 
</div>
</section>

);

}