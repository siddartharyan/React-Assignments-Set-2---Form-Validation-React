import React, { Component, useState } from "react";
// import '../styles/App.css';

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleGendeChange = (evt) => {
    setGender(evt.target.value);
  };

  const handlePhoneNumberChange = (evt) => {
    setPhoneNumber(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const isNameValid = (nameValue) => {
    const regex = /^[a-zA-Z0-9 ]*$/;
    return regex.test(nameValue);
  };

  const isEmailValid = (emailValue) => {
    return emailValue.includes("@");
  };

  const isGenderValid = (genderValue) => {
    return (
      genderValue === "male" ||
      genderValue === "female" ||
      genderValue === "others"
    );
  };

  const isPhoneNumberValid = (phoneNumberVal) => {
    const regex = /^\d+$/;
    return regex.test(phoneNumberVal);
  };

  const isPasswordValid = (passwordVal) => {
    return passwordVal.length >= 6;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setWelcomeMessage("");

    // const name = evt.target.name.value;
    // const email = evt.target.email.value;
    // const gender = evt.target.gender.value;
    // const phone = evt.target.phoneNumber.value;
    // const password = evt.target.password.value;

    if (!name || !email || !gender || !phoneNumber || !password) {
      setErrorMessage("All fields are mandatory");
      return;
    } else if (!isNameValid(name)) {
      setErrorMessage("Name is not alphanumeric");
      return;
    } else if (!isEmailValid(email)) {
      setErrorMessage("Email must contain @");
      return;
    } else if (!isGenderValid(gender)) {
      setErrorMessage("Please identify as male, female or others");
      return;
    } else if (!isPhoneNumberValid(phoneNumber)) {
      setErrorMessage("Phone Number must contain only numbers");
      return;
    } else if (!isPasswordValid(password)) {
      setErrorMessage("Password must contain atleast 6 letters");
      return;
    } else {
      setErrorMessage("");
    }

    const userName = email.split("@")[0];
    setWelcomeMessage(`Hello ${userName}`);
  };
  return (
    <div id="main">
      {/* <form onSubmit = {handleSubmit}> */}
      <div>
        <label>Name</label>
        <input
          data-testid="name"
          // name = 'name'
          // type='string'
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div>
        <label>Email address</label>
        <input
          data-testid="email"
          // name = 'email'
          // type='string'
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label>Gender</label>
        <input
          data-testid="gender"
          // name = 'gender'
          // type='text'
          // defaultValue = 'male'
          value={gender}
          onChange={handleGendeChange}
        />
      </div>

      <div>
        <label>Phone Number</label>
        <input
          data-testid="phoneNumber"
          // name = 'phoneNumber'
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          data-testid="password"
          // name = 'password'
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />
      </div>

      <div>{errorMessage}</div>
      <div>
        <button
          data-testid="submit"
          // type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* </form> */}

      <div>{welcomeMessage}</div>
    </div>
  );
};

export default App;
