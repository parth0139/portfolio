import { useEffect, useState } from "react";
import "./Banner.css";
import bg from "./bg.jpg";
import bg1 from "./bg5.jpg";
import bg6 from "./bg6.jpg";
import bg7 from "./bg7.jpg";

// export const Banner ={}=>{
export function Banner(){
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer","hopefully many more things to come with time ..."];

  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta)

      return () => {clearInterval(ticker) };
    },
    [text ]
  );

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (deleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };



  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Parth_resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = 'Parth_resume.pdf';
            alink.download = 'Parth_Resume.pdf';
            alink.click();
        })
    })
}


  return (
    <section className="banner " id="home">
      <div className="container py-4 ">

        <div className="row  align-items-center d-flexb flex-wrap ">
          <div className="  col-xs-12 col-md-7 col-xl-7 col-sm-7 intro ">
            <span className="tagline ">Welcome to my Portfolio</span>
            <h1 className="mt-3 ">
              Hi I'm Parth Sarthi Roy
              <span className=" d-flex  flex-wrap"> {text} </span>
            </h1>
            
          </div>

          <div className=" col-xs-2 col-md-3 col-xl-5 col-sm-3  mt d-flex flex-column small ">
            {/* <div className=" mt d-flex flex-column "> */}
            <div className="  d-flex flex-row">
            <img src={bg} id="img1" className="img-fluid float-right profile" alt="Hii buddy" />
            <img src={bg1} id="img2" className="img-fluid float-right profile" alt="Hii buddy" />
            </div>
            <div className="  d-flex flex-row">
            <img src={bg6} id="img3" className="img-fluid float-right profile" alt="Hii buddy" />
            <img src={bg7} id="img4" className="img-fluid float-right profile" alt="Hii buddy" />
            </div>
            {/* </div> */}
            </div>

            <div className="mt-4 pb-5 col-xs-4 col-md-4 col-xl-3 col-sm-6 d-flex flex-column">

            <a href="#footer" >
            <button className="move my-3" onClick={() => {}}>  Lets Connect </button> 
            </a> 

            <button className="btn my-2 btn-dark" onClick={onButtonClick}>
                    Download Resume
                </button>
                </div>

        </div>

        

      </div>
    </section>
  );
}
