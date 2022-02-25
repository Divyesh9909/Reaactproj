import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./Login.css";

function Login() {
  // React States
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);

  // User Login info
  //   const database = [
  //     {
  //       username: "user1",
  //       password: "pass1",
  //     },
  //     {
  //       username: "user2",
  //       password: "pass2",
  //     },
  //   ];

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password",
  // };

  const handleSubmit = (event) => {};
  useEffect(() => {
    console.log("document", document);
  }, []);
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input
            type="text"
            name="uname"
            placeholder="Enter Your Email"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            placeholder="Enter Your Password"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="bgcolor">
      <div className="card card-container">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);

export default Login;
