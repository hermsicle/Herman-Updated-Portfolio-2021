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
    // Checking to see if the name,email, and message is properly inputted
    const nameValidate = validator.isAscii(nameInput);
    const emailValidate = validator.isEmail(emailInput);
    const messageValidate = validator.isAscii(messageInput);

    if (!nameValidate) {
      setNameError(true);
    }
    if (!emailValidate) {
      setEmailError(true);
    }
    if (!messageValidate) {
      setMessageError(true);
    } else if (nameValidate && emailValidate && messageValidate) {
      setNameInput("");
      setEmailInput("");
      setMessageInput("");
      setSuccess(true);
      emailjs
        .sendForm(
          "Gmail",
          "template_9nc8wgs",
          e.target,
          "user_FSWwId9w8gNQJml5CKO0B"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3500);
  }, [success]);

  useEffect(() => {
    setTimeout(() => {
      setNameError(false);
      setEmailError(false);
      setMessageError(false);
    }, 3500);
  }, [nameError, emailError, messageError]);

  return (
    <div className="contact container section" id="contact">
      <h1> Contact </h1>
      <p className="contact-title">Interested in working together?</p>
      <p className="contact-subtitle">
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
            {emailError && (
              <div className="error">
                <p> Please Fill Out </p>
              </div>
            )}
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
          {messageError && (
            <div className="error">
              <p> Please Fill Out </p>
            </div>
          )}
        </div>
        <div className="flex-row">
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
