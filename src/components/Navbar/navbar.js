import React , { Component }  from "react";
import "./navbar.css";
import profile from './parth_profile.jpeg'
import  { useState,useEffect }  from "react"


function Navbar() {
  
  const [activeLink, setActiveLink]= useState('home');
  const [scrolled, setScrolled]= useState(false);

  // useEffect(()=>{
  //   const onscroll = ()=>{
  //   if (window.scrollY > 50){
  //     setScrolled(true);
  //   }
  //   else {
  //     setScrolled(false);
  //   }
  // }

  // window.addEventListener("scroll",onscroll);

  // return ()=> window.removeEventListener("scroll",onscroll)

  // })





//     const onUpdate = (value)=>{

// console.log(value);
// setActiveLink('');
//   setActiveLink(value);
//   console.log(typeof(value));
//   console.log(activeLink);
//   console.log(typeof(activeLink));
//   console.log(activeLink === 'contact');
  
// }



    return (
      <> 
      <section className=" my-nav " id="navbar">

    <nav className= "navbar navbar-text navbar-expand-lg bg-light fixed-top mb-3 {scrolled ? 'scrolled':''}">
      
        <div className=" container-fluid n-wrapper" id="1">
          <div className="n-left">
            <img className="img-fluid float-start profile"  src={profile} alt="" />
            <div className="n-name navbar-brand">Parth </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div className=" n-right " id="2">
              <div className="n-list " id="3">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0  ">




                 <a href="#home"  onClick={ ()=>setActiveLink('home')}>
{ activeLink === 'home' ? ( <li className="nav-item n-active"  >Home</li>
    ) :( <li className="nav-item "  >Home</li>)
}
                  </a>

                  <a href="#about"  onClick={ ()=>setActiveLink('about')}>
{ activeLink === 'about' ? ( <li className="nav-item n-active"  >About</li>
    ) :( <li className="nav-item "  >About</li>)
}
                  </a>

                  <a href="#skills"  onClick={ ()=>setActiveLink('skills')}>
{ activeLink === 'skills' ? ( <li className="nav-item n-active"  >Skills</li>
    ) :( <li className="nav-item "  >Skills</li>)
}
                  </a>

                  <a href="#projects"  onClick={ ()=>setActiveLink('projects')}>
{ activeLink === 'projects' ? ( <li className="nav-item n-active"  >Projects</li>
    ) :( <li className="nav-item "  >Projects</li>)
}
                  </a>

                  <a href="#contact"  onClick={ ()=>setActiveLink('contact')}>
{ activeLink === 'contact' ? ( <li className="nav-item n-active"  >Contact</li>
    ) :( <li className="nav-item "  >Contact</li>)
}
                  </a>

                  {/* <a href="#home" className=" {activeLink === 'home' ? 'n-active': '' }" onClick={()=>setActiveLink('home')} > <li className="nav-item "  >About</li> </a>

                 <a href="#about" className=" {activeLink === 'about' ? 'n-active': '' }" onClick={()=>setActiveLink('about')} > <li className="nav-item "  >About</li> </a>

                 <a href="#skills"  className="{activeLink === 'skills' ? 'n-active': '' } " onClick={()=>setActiveLink('skills')}> <li className="nav-item   "   >Skills</li> </a>
                 <a href="#projects" className=" {activeLink === 'projects' ? 'n-active': '' } "  onClick={()=>setActiveLink('projects')}> <li className="nav-item  "   >Projects</li> </a>
                 <a href="#contact" className=" {activeLink === 'contact' ? 'n-active': '' } " onClick={()=>setActiveLink('contact')}> <li className="nav-item  "   >Contact</li> </a> */}

                </ul>
              </div>
             {/* <a href="#contact"> <button className="buttons btn nav-item ">Contact Us</button></a> */}
            </div>
          </div>
        </div>
    </nav>
    </section>
</>

  );
  
}



export default Navbar;
