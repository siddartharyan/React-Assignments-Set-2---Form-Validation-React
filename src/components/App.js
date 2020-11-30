// import React, { Component, useState } from "react";
// // import '../styles/App.css';

// const App = () => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const [welcomeMessage, setWelcomeMessage] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("male");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");

//   const handleName = (evt) => {
//     setName(evt.target.value);
//   };

//   const handleEmail = (evt) => {
//     setEmail(evt.target.value);
//   };

//   const handleGender = (evt) => {
//     setGender(evt.target.value);
//   };

//   const handlePhoneNumber = (evt) => {
//     setPhoneNumber(evt.target.value);
//   };

//   const handlePassword = (evt) => {
//     setPassword(evt.target.value);
//   };

//   const isNameValid = (nameValue) => {
//     const regex = /^[a-zA-Z0-9 ]*$/;
//     return regex.test(nameValue);
//   };

//   const isEmailValid = (emailValue) => {
//     return emailValue.includes("@");
//   };

//   const isGenderValid = (genderValue) => {
//     return (
//       genderValue === "male" ||
//       genderValue === "female" ||
//       genderValue === "others"
//     );
//   };

//   const isPhoneNumberValid = (phoneNumberVal) => {
//     const regex = /^\d+$/;
//     return regex.test(phoneNumberVal);
//   };

//   const isPasswordValid = (passwordVal) => {
//     return passwordVal.length >= 6;
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     setWelcomeMessage("");
//     if (!name || !email || !gender || !phoneNumber || !password) {
//       setErrorMessage("All fields are mandatory");
//       return;
//     } else if (!isNameValid(name)) {
//       setErrorMessage("Name is not alphanumeric");
//       return;
//     } else if (!isEmailValid(email)) {
//       setErrorMessage("Email must contain @");
//       return;
//     } else if (!isGenderValid(gender)) {
//       setErrorMessage("Please identify as male, female or others");
//       return;
//     } else if (!isPhoneNumberValid(phoneNumber)) {
//       setErrorMessage("Phone Number must contain only numbers");
//       return;
//     } else if (!isPasswordValid(password)) {
//       setErrorMessage("Password must contain atleast 6 letters");
//       return;
//     } else {
//       setErrorMessage("");
//     }

//     const userName = email.split("@")[0];
//     setWelcomeMessage(`Hello ${userName}`);
//   };
//   return (
//     <div id="main">
//       {/* <form onSubmit = {handleSubmit}> */}
//       <div>
//         <label>Name</label>
//         <input
//           data-testid="name"
//           // name = 'name'
//           // type='string'
//           value={name}
//           onChange={handleName}
//         />
//       </div>

//       <div>
//         <label>Email address</label>
//         <input
//           data-testid="email"
//           // name = 'email'
//           // type='string'
//           value={email}
//           onChange={handleEmail}
//         />
//       </div>

//       <div>
//         <label>Gender</label>
//         <input
//           data-testid="gender"
//           // name = 'gender'
//           // type='text'
//           // defaultValue = 'male'
//           value={gender}
//           onChange={handleGender}
//         />
//       </div>

//       <div>
//         <label>Phone Number</label>
//         <input
//           data-testid="phoneNumber"
//           // name = 'phoneNumber'
//           value={phoneNumber}
//           onChange={handlePhoneNumber}
//         />
//       </div>

//       <div>
//         <label>Password</label>
//         <input
//           data-testid="password"
//           // name = 'password'
//           value={password}
//           onChange={handlePassword}
//           type="password"
//         />
//       </div>

//       <div>{errorMessage}</div>
//       <div>
//         <button
//           data-testid="submit"
//           // type='submit'
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>

//       {/* </form> */}

//       <div>{welcomeMessage}</div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  let error = false;
  let [ErrorMessage, setErrorMessage] = useState("");
  const [input, setinput] = useState({
    Name: "",
    email: "",
    Gender: "",
    phone: "",
    password: ""
  });
  const handleclick = (e) => {
    e.preventDefault();
    let temp = input.Name;
    let address = input.email;
    let password = input.password;
    temp = temp.replace(/\s+/g, "");
    var RegEx = /^[a-z0-9]+$/i;
    if (
      input.email === "" ||
      input.Name === "" ||
      input.password === "" ||
      input.Gender === "" ||
      input.phone === ""
    ) {
      setErrorMessage("All fields are mandatory");
      return;
    }
    if (!RegEx.test(temp)) {
      setErrorMessage("Name is not alphanumeric");
      return;
    }
    if (!address.includes("@")) {
      setErrorMessage("Email must contain @");
      return;
    }

    if (isNaN(input.phone)) {
      setErrorMessage("Phone Number must contain only numbers");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must contain atleast 6 letters");
      return;
    }
    let info = input.email;
    info = info.substr(0, info.indexOf("@"));
    console.log(info);
    setErrorMessage("Hello " + info);
    console.log(RegEx.test(temp));
    console.log(input);
  };
  const handlechange = (e) => {
    setinput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  useEffect(() => {}, []);
  return (
    <div id="main">
      <div>{ErrorMessage}</div>
      <label>Name:</label>
      <input data-testid="name" name="Name" onChange={handlechange} />
      <br />
      <label>Email address:</label>
      <input data-testid="email" name="email" onChange={handlechange} />
      <br />
      <label>Gender:</label>
      <select defaultValue="male" name="Gender" onChange={handlechange}>
        <option defaultValue>Male</option>
        <option value="Female">Female</option>
        <option value="others">Others</option>
      </select>
      <br />
      <label>Phone number:</label>
      <input data-testid="phoneNumber" name="phone" onChange={handlechange} />
      <br />
      <label>Password:</label>
      <input
        data-testid="password"
        type="password"
        name="password"
        onChange={handlechange}
      />
      <br />
      <button data-testid="submit" onClick={handleclick}>
        Submit
      </button>
    </div>
  );
};

export default App;
