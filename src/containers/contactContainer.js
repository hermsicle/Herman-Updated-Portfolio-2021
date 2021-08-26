import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const ContactContainer = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
  return (
    <div className="contact container section" id="contact">
      <h1> Contact </h1>
      <p>Interested in working together?</p>
      <p>
        Please feel free to contact me if you need a developer on your team.
      </p>
      <div className="contact-form">
        <div className="flex-row">
          <div className="input name">
            <img src="./assets/images/user.svg" alt="name" />
            <input
              type="text"
              placeholder="Name"
              value={nameInput}
              onChange={({ target }) => setNameInput(target.value)}
            />
          </div>
          <div className="input email">
            <img src="./assets/images/email.svg" alt="email" />
            <input
              type="text"
              placeholder="E-mail"
              value={emailInput}
              onChange={({ target }) => setEmailInput(target.val)}
            />
          </div>
        </div>
        <div className="input message">
          <img src="./assets/images/speech-bubble.svg" alt="message" />
          <textarea
            placeholder="Message"
            value={messageInput}
            onChange={({ target }) => setMessageInput(target.val)}
          />
        </div>
        <div className="flex-row">
          <div className="private-privacy">
            <BlueSwitch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
            <p>
              I accept the <span> terms and conditions </span>
            </p>
          </div>
          <div className="button-container">
            <button className="send-button">
              <img src="./assets/images/send.svg" alt="" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
