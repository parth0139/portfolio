import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Validator } from "react";

import "./contact.css";

export function Contact() {
  const initialdetail = {
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formdetail, setdetail] = useState(initialdetail);

  const [buttonText, setButtonText] = useState("Send");

  const [status, setStatus] = useState({ success: false, message: null });

  const formUpdate = (category, value) => {
    setdetail({
      ...formdetail,
      [category]: value,
    });
  };
  const form = useRef();

  const handleSubmit = (e) => {
    

    var temp = 0;
    
      if (formdetail.fullname.length >= 3) {temp+=1;
      
    };
  formdetail.phone = parseInt(formdetail.phone);
   

      if (
        Number.isInteger(formdetail.phone) &&
        formdetail.phone > 0 &&
        formdetail.phone.toString().length == 10
      ){ temp+=1;
       };
      formdetail.phone.toString();

      if (formdetail.message.length > 5) {temp+=1;
       };

      if (formdetail.subject.length > 5) {temp+=1;
       };
    


    if (temp == 4) {
      var templateParams = {
        email: formdetail.email,
        name: formdetail.fullname,
        phone: formdetail.phone,
        message: formdetail.message,
        subject: formdetail.subject,
      };

      setButtonText("Sending...");

      e.preventDefault(); // prevents the page from reloading when you hit “Send”

      // emailjs.sendForm('service_oj96tq6', 'template_awmsv0f', form.current, 'mtCMB8jvpJacraUjJ',templateParams)
      emailjs
        .send(
          "service_oj96tq6",
          "template_awmsv0f",
          templateParams,
          "mtCMB8jvpJacraUjJ"
        )

        .then(
          (result) => {
            // show the user a success message
            setStatus({
              success: true,
              message: "Message sent successfully, Will reach you soon",
            });
            // window.alert(status.message);
            setButtonText("Send");
            setdetail(initialdetail);
          },
          (error) => {
            // show the user an error
            setStatus({
              success: false,
              message: "Something went wrong , Please try again",
            });
           
            setButtonText("Try Again");
            // setdetail(initialdetail);
          }
        );
    } 
    else {
        
        e.preventDefault();
        setStatus({
          success: false,
          message: "Please fill the fields properly",
        });
        // window.alert(status.message);
        setButtonText("Try Again");
        // setdetail(initialdetail);
      
    }
  };

  const cross = () => {
    setButtonText("Send");
    setStatus({ });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <h2>Get In Touch </h2>

          {status.message && (
            <div className="mx-auto col-sm-12 col-md-9 col-xl-8 col-xs-12">
              <div
                // className="alert cut  {status.success == false ? 'alert-warning' : 'alert-success'} alert-dismissible fade show"
                className="alert cut alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong> {status.message} </strong>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={cross}
                />
              </div>
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} >
            <div className=" mb-3">
              <div className="mx-auto col-sm-12 col-md-9 col-xl-8 col-xs-12">
                <input
                  required
                  type="text"
                  className="form-control"
                  value={formdetail.fullname}
                  placeholder="First Name"
                  onChange={(e) => formUpdate("fullname", e.target.value)}
                />
              </div>
            </div>

            <div className=" mb-3">
              <div className=" mx-auto  col-sm-12 col-md-9 col-xl-8 col-xs-12">
                <input
                  required
                  type="email"
                  className="form-control"
                  value={formdetail.email}
                  placeholder="Email"
                  onChange={(e) => formUpdate("email", e.target.value)}
                />
              </div>
            </div>

            <div className=" mb-3">
              <div className=" mx-auto col-sm-12 col-md-9 col-xl-8 col-xs-12">
                <input
                  required
                  type="tel"
                  className="form-control"
                  value={formdetail.phone}
                  placeholder="Phone"
                  onChange={(e) => formUpdate("phone", e.target.value)}
                />
              </div>
            </div>

            <div className=" mb-3">
              <div className="mx-auto col-sm-12 col-md-9 col-xl-8 col-xs-12">
                <input
                  required
                  type="text"
                  className="form-control"
                  value={formdetail.subject}
                  placeholder="Subject"
                  onChange={(e) => formUpdate("subject", e.target.value)}
                />
              </div>
            </div>

            <div className=" mb-3">
              <div className="mx-auto col-sm-12 col-md-9 col-xl-8 col-xs-12 ">
                <textarea
                  required
                  rows="6"
                  className="form-control"
                  value={formdetail.message}
                  placeholder="Message"
                  onChange={(e) => formUpdate("message", e.target.value)}
                />
              </div>
            </div>

            <button className="button " type="submit">
              <span>{buttonText}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
