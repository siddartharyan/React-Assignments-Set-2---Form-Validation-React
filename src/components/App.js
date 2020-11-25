import React, { Component, useState } from "react";
import "../styles/App.css";
const App = () => {
  let [msg, setMsg] = useState("");
  let [suc, setSuc] = useState(false);
  const handleClick = (evt) => {
    evt.preventDefault();
    setMsg("");
    let name = evt.target.name.value;
    let email = evt.target.email.value;
    let gender = evt.target.gender.value;
    let number = evt.target.phoneNumber.value;
    let password = evt.target.password.value;
    if (!name || !email || !gender || !number || !password) {
      setMsg("All fields are mandatory");
      return;
    }

    // if (!name) {
    //   setMsg("Name is not alphanumeric");
    //   return;
    // }
    // if (!email) {
    //   setMsg("Email must contain @");
    //   return;
    // }
    // if (!gender) {
    //   setMsg("Please identify as male, female or others");
    //   return;
    // }
    // if (!number) {
    //   setMsg("Phone Number must contain only numbers");
    //   return;
    // }

    // if (!password) {
    //   setMsg("Password must contain atleast 6 letters");
    //   return;
    // }

    let al = 0,
      num = 0;
    for (let i = 0; i < name.length; i++) {
      if (
        (name[i] >= "a" && name[i] <= "z") ||
        (name[i] >= "A" && name[i] <= "Z")
      ) {
        al++;
      } else if (Number(name[i]) >= 0 && Number(name[i]) <= 9) {
        num++;
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
  };
  return (
    <div id="main">
      <p>{msg}</p>
      <form onSubmit={handleClick}>
        <input data-testid="name" name="name" />
        <br />
        <input data-testid="email" name="email" />
        <br />
        <input data-testid="gender" name="gender" defaultValue="male" />
        <br />
        <input data-testid="phoneNumber" name="phoneNumber" />
        <br />
        <input data-testid="password" name="password" type="password" />
        <br />
        <button data-testid="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
