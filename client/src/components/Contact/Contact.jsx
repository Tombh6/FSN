import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./styles.css";

const Result = () => {
  return (
    <p>Your message has been successfully sent. we will contact you soon</p>
  );
};
function Contact(props) {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ccbo1bw",
        "template_creroe6",
        e.target,
        "8ThMDdUcFKfuO62lL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  //hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z]{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChanges = (d) => {
    setPhone(d.target.value);
  };
  const [messages, setMessages] = useState("");
  const [phone, setPhone] = useState("");
  const phoneValidation = () => {
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (regex.test(phone)) {
      setMessages("Phone number is valid");
    } else if (!regex.test(phone) && phone !== "") {
      setMessages("Phone number is Not valid");
    } else {
      setMessages("");
    }
  };

  const handleOnChange1 = (c) => {
    setFname(c.target.value);
  };
  const [message1, setMessage1] = useState("");
  const [fname, setFname] = useState("");
  const fnameValidation = () => {
    let regex1 = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
    if (regex1.test(fname)) {
      setMessages("Valid name");
    } else if (!regex1.test(fname) && fname !== "") {
      setMessage1("Name is Not valid");
    } else {
      setMessage1("");
    }
  };

  function multipleFunc() {
    emailValidation();
    phoneValidation();
    fnameValidation();
    limComments();
  }
  function limComments(obj) {
    var charLimit = [
      obj.getAttribute("minlength"),
      obj.getAttribute("maxlength"),
    ];
    var fieldID = obj.getAttribute("id");

    if (obj.value.length >= charLimit[0] && obj.value.length <= charLimit[1]) {
      console.log("The comment in " + fieldID + " is just right.");
    } else if (obj.value.length > charLimit[1]) {
      console.log("The comment in " + fieldID + " is too long.");
      obj.value = obj.value.substring(0, charLimit[1]); // Truncate to first 500 characters
    } else {
      console.log("The comment in " + fieldID + " is too short.");
    }
  }

  return (
    <body>
      <form action="" onSubmit={sendEmail}>
        <div className="formWord">
          <h1>Get in touch!</h1>
          <span>Full Name</span>
          <br />
          <input
            className="fname"
            type="text"
            name="fname"
            value={fname}
            onChange={handleOnChange1}
            required
          />
          <br />
          <span>Phone Number</span>
          <br />
          <input
            className="phone"
            type="text"
            name="phone"
            value={phone}
            onChange={handleOnChanges}
            required
          />
          {messages}
          <br />
          <span>Enter Email</span>
          <br />
          <input
            className="input100"
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />
          {message}
          <br />
        </div>
        <div className="formWord">
          <span>Message</span>
          <br />
          <textarea
            name="message"
            minLength="10"
            maxLength="1000"
            required
          ></textarea>
          <br />
          <button onClick={multipleFunc}>SUBMIT</button>

          <div className="row">{result ? <Result /> : null}</div>
        </div>
      </form>
    </body>
  );
}

export default Contact;
