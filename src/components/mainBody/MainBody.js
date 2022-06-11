import React, { useState, useEffect } from "react";
import "./mainBody.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "../Alert/Alert";

export default function MainBody() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    msg: "Login Successful",
    type: "success",
  });

  async function login(e) {
    e.preventDefault();
    let item = { email, password };
    let result = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();

    if (!email || !password) {
      showAlert(true, "danger", "Missing Email or Password");
    } else {
      showAlert(true, "success", "Login Successful");
    }
    setEmail("");
    setPassword("");
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <div className="gridContainer">
      <div className="login">
        <h2>Welcome Back</h2>
        <p>Sub-title next goes here</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address*"
              style={{ width: "20rem" }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password*"
              style={{ width: "20rem" }}
              onChange={(p) => setPassword(p.target.value)}
              value={password}
            />
          </Form.Group>
          <Button
            onClick={login}
            variant="primary"
            type="submit"
            style={{ width: "20rem" }}
          >
            Login
          </Button>
          <div className="btn-container">
            <label htmlFor="#remember-password">
              <input type="checkbox" className="checkbox" />
              Remember Password
            </label>
            <button className="forgot-password">Forgot Password?</button>
          </div>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        </Form>
      </div>
      <div className="photo"></div>
    </div>
  );
}
