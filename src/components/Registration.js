import React from "react";
import { useState } from "react";
import "./Login.css";
import { RegistrationFunction } from "../Redux/Action/userAction";
import { useDispatch } from "react-redux";
//import Login1 from "./Login1.js";
import { Link, useHistory } from "react-router-dom";

export default function Form(req) {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phno, setphno] = useState("");
  const dispatch = useDispatch();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

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

  // Handling the password change
  const handlephno = (e) => {
    setphno(e.target.value);
    setSubmitted(false);
  };

  let history = useHistory();

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    var pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    console.log("email", pattern.test(email));
    if (!name) {
      setError("Name is Required");
    } else if (name.length <= 2) {
      setError("Name should be atleast 3 char");
    } else if (!email) {
      setError("You have provided valid Email Id");
    } else if (!pattern.test(email)) {
      setError("Sorry!Incorrect Email ID");
    } else if (!password) {
      setError("Password is Required");
    } else if (password.length <= 4) {
      setError("Password must be atleast 4 char");
    } else if (!phno) {
      setError("Phno is Required");
    } else if (!phno.match(/^\d{10}$/)) {
      setError("Phno must be atleast 10 char");
    } else {
      setSubmitted(true);
      dispatch(RegistrationFunction({ name, email, password, phno }));
      history.push("./Login");
      setError(false);
    }
  };
  console.log("UserData", name);
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error,
        }}
      >
        <h1>{error}</h1>
      </div>
    );
  };

  return (
    <div className="card card-container">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
          placeholder="Enter Your Name"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="text"
          placeholder="Enter Your Email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
          placeholder="Enter Your Password"
        />

        <label className="label">PH No</label>
        <input
          onChange={handlephno}
          className="input"
          value={phno}
          type="text"
          placeholder="Enter Your PhNo"
        />
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
      <h4>Already have An Account</h4>
      <Link to="/Login">Login</Link>
    </div>
  );
}
