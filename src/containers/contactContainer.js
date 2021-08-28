import React, { useState, useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { MouseOverPopover } from "../components";
import emailjs from "emailjs-com";
import Alert from "@material-ui/lab/Alert";
import validator from "validator";

const ContactContainer = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [success, setSuccess] = useState(null);

  const [toggleState, setToggleState] = useState(false);
  const handleChange = (event) => {
    setToggleState({
      ...toggleState,
      [event.target.name]: event.target.checked,
    });
  };
  const BlueSwitch = withStyles({
    switchBase: {
      color: "#e3e8ff",
      "&$checked": {
        color: "#00cffd",
      },
      "&$checked + $track": {
        backgroundColor: "#00cffd",
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const sendEmail = (e) => {
    e.preventDefault();

    const nameValidate = validator.isAscii(nameInput);
    console.log(`Name is ${nameValidate}`);
    !nameValidate && setNameError(true);

    const emailValidate = validator.isEmail(emailInput);
    console.log(`Email is ${emailValidate}`);
    !emailValidate && setEmailError(true);

    const messageValidate = validator.isAscii(messageInput);
    console.log(`Message is ${messageValidate}`);
    !messageValidate && setMessageError(true);
    // emailjs
    //   .sendForm(
    //     "Gmail",
    //     "template_9nc8wgs",
    //     e.target,
    //     "user_FSWwId9w8gNQJml5CKO0B"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
    setSuccess(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3500);
  }, [success]);

  return (
    <div className="contact container section" id="contact">
      <h1> Contact </h1>
      <p>Interested in working together?</p>
      <p>
        Please feel free to contact me if you need a developer on your team.
      </p>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="flex-row">
          <div className="input name">
            <img src="./assets/images/user.svg" alt="name" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            {nameError && (
              <div className="error">
                <p> Please Fill Out </p>
              </div>
            )}
          </div>
          <div className="input email">
            <img src="./assets/images/email.svg" alt="email" />
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
        </div>
        <div className="input message">
          <img src="./assets/images/speech-bubble.svg" alt="message" />
          <textarea
            placeholder="Message"
            name="message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </div>
        <div className="flex-row">
          <div className="private-privacy">
            <BlueSwitch
              checked={toggleState.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
            <MouseOverPopover />
          </div>
          <div className="button-container">
            <button className="send-button">
              <img src="./assets/images/send.svg" alt="" />
              Send
            </button>
          </div>
        </div>
        {success && (
          <div className="success-container">
            <Alert
              className="alert"
              variant="filled"
              severity="success"
              color="info"
            >
              Your message sent successfully!
            </Alert>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactContainer;
