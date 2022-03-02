// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";

// import "./Login.css";

// function Login() {
//   // React States
//   const [errorMessages] = useState({});
//   const [isSubmitted] = useState(false);

//   // User Login info
//   //   const database = [
//   //     {
//   //       username: "user1",
//   //       password: "pass1",
//   //     },
//   //     {
//   //       username: "user2",
//   //       password: "pass2",
//   //     },
//   //   ];

//   // const errors = {
//   //   uname: "invalid username",
//   //   pass: "invalid password",
//   // };

//   const handleSubmit = (event) => {};
//   useEffect(() => {
//     console.log("document", document);
//   }, []);
//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );
//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Email </label>
//           <input
//             type="text"
//             name="uname"
//             placeholder="Enter Your Email"
//             required
//           />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input
//             type="password"
//             name="pass"
//             placeholder="Enter Your Password"
//             required
//           />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="bgcolor">
//       <div className="card card-container">
//         <div className="login-form">
//           <div className="title">Sign In</div>
//           {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//         </div>
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Login />, rootElement);

// export default Login;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LoginFunction } from "../Redux/Action/userAction";
import { useDispatch } from "react-redux";
import "./Login.css";

export default function Form(req) {
  const [errorMessages] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [isSubmitted] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    console.log("email", pattern.test(email));

    if (!email) {
      setError("You have provided valid Email Id");
    } else if (!pattern.test(email)) {
      setError("Sorry!Incorrect Email ID");
    } else if (!password) {
      setError("Password is Required");
    } else if (password.length <= 4) {
      setError("Password must be atleast 4 char");
    } else {
      setSubmitted(true);
      dispatch(LoginFunction({ email, password }));
      setError(false);
    }
  };
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
            onChange={handleEmail}
            type="text"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            onChange={handlePassword}
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
  dispatch(LoginFunction({ email, password }));
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
// ReactDOM.render(<Login />, rootElement);
