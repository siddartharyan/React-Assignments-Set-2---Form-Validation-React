import React, { Component, useState } from "react";
import "../styles/App.css";
const App = () => {
  let [msg, setMsg] = useState("");
  let [suc, setSuc] = useState(false);
  const handleClick = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let number = document.getElementById("phoneNumber").value;
    let password = document.getElementById("password").value;
    if (!name && !email && !gender && !number && !password) {
      setMsg("All fields are mandatory");
      return;
    }
    if (!name) {
      setMsg("Name Error");
      return;
    }
    if (!email) {
      setMsg("Email Error");
      return;
    }
    if (!number) {
      setMsg("Phone Number Error");
      return;
    }
    if (!password) {
      setMsg("Password Error");
      return;
    }
    let al = 0,
      num = 0;
    for (let i = 0; i < name.length; i++) {
      if (name[i] >= "a" && name[i] <= "z") {
        al++;
      } else if (al && Number(name[i]) >= 0 && Number(name[i]) <= 9) {
        num++;
        break;
      }
    }
    if (!al || !num) {
      setMsg("Name is not alphanumeric");
      return;
    }
    let naMe = "";
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        break;
      }
      naMe += email[i];
    }
    if (naMe.length === email.length) {
      setMsg("Email must contain @");
      return;
    }
    if (gender !== "male" && gender !== "female" && gender !== "others") {
      setMsg("Please identify as male, female or others");
      return;
    }
    if (isNaN(number)) {
      setMsg("Phone Number must contain only numbers");
      return;
    }
    if (password.length < 6) {
      setMsg("Password must contain atleast 6 letters");
      return;
    }
    setMsg(`Hello ${naMe}`);
    setSuc(true);
  };
  return (
    <div id="main">
      <p>{msg}</p>
      {suc === false ? (
        <>
          <input data-testid="name" id="name" />
          <br />
          <input data-testid="email" id="email" />
          <br />
          <input data-testid="gender" id="gender" value="male" />
          <br />
          <input data-testid="phoneNumber" id="phoneNumber" />
          <br />
          <input data-testid="password" id="password" />
          <br />
          <button data-testid="submit" onClick={handleClick}>
            submit
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
