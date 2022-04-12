import React, {useState } from "react";
import emailjs from 'emailjs-com';

const Result =() =>{
    return(
        <p>Your message has been successfully sent. we will contact you soon</p>
    )
}
function Contact(props){
    const [result, showResult]= useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ccbo1bw', 'template_creroe6', e.target, '8ThMDdUcFKfuO62lL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
    showResult(true);
    };

    //hide result
    setTimeout(()=>{
        showResult(false)
    }, 5000)

return(
    
      <form action="" onSubmit={sendEmail}>
          <div className="formWord">
              <h2>Say Hello!</h2>
              <span>Full Name</span>
              <br />
              <input
              className="input100" 
              type="text"
              name="fullname"
              required 
              />
              <br />
              <span>Phone Number</span>
              <br />
              <input
              className="input100"
              type="text"
              name="phone"
              required 
              /> 
              <br />
              <span>Enter Email</span>
              <br />
              <input
              className="input100"
              type="text"
              name="email"
              required 
              /> 
              <br />
              </div>
              <div className="formWord">
                  <span>Message</span>
                  <br />
                  <textarea name="message" required></textarea>
                  <br />
                  <button>SUBMIT</button>
                <div className="row">{ result ? <Result/> : null }</div>
                </div>
                </form>
      
);
}

export default Contact;