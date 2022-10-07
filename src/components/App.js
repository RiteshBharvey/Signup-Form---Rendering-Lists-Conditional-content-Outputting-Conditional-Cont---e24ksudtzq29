import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [formIsValid, setFormIsvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username,setUsername]=useState("");
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: ""
  });

  const changeHandler = (e) => {
    if (e.target.id === "userName") {
      setInputData((prevInput) => {
        return { ...prevInput, name: e.target.value };
      });
    } else if (e.target.id === "userEmail") {
      setInputData((prevInput) => {
        return { ...prevInput, email: e.target.value };
      });
    } else if (e.target.id === "userGender") {
      console.log(e.target.value);
      setInputData((prevInput) => {
        return { ...prevInput, gender: e.target.value };
      });
    } else if (e.target.id === "userPhoneNumber") {
      setInputData((prevInput) => {
        return { ...prevInput, phoneNumber: e.target.value };
      });
    } else if (e.target.id === "userPassword") {
      setInputData((prevInput) => {
        return { ...prevInput, password: e.target.value };
      });
    }
    setFormIsvalid(false);
    setErrorMessage("");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      inputData.name.trim() === "" ||
      inputData.email.trim() === "" ||
      inputData.phoneNumber.trim() === "" ||
      inputData.password.trim() === ""
      ) {
        setErrorMessage("All fields are mandatory");
        return;
      }
      if (!inputData.name.trim().match(/^[0-9a-zA-Z ]+$/)) {
        setErrorMessage("Name is not alphanumeric");
        return;
      }
      if (!inputData.email.trim().includes("@")) {
      setErrorMessage("Email must contain @");
      return;
    }
    if (!inputData.phoneNumber.trim().match(/^[0-9]+$/)) {
      setErrorMessage("Phone Number must contain only numbers");
      return;
    }
    if (inputData.password.trim().length < 6) {
      setErrorMessage("Password must contain atleast 6 letters");
      return;
    }
    console.log(e.target);
    setFormIsvalid(true);
    setUsername(inputData.name);
    setInputData({
      name: "",
      email: "",
      gender: "male",
      phoneNumber: "",
      password: ""
    });
  };
  return (
    <div id="main">
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="userName">Name</label>
        <input
          id="userName"
          data-testid="name"
          type="text"
          value={inputData.name}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="userEmail">Email</label>
        <input
          id="userEmail"
          data-testid="email"
          // type="email"
          value={inputData.email}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="userGender">Gender</label>
        <select
          id="userGender"
          data-testid="gender"
          value={inputData.gender}
          onChange={changeHandler}
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <br />
        <label htmlFor="userPhoneNumber">Phone Number</label>
        <input
          id="userPhoneNumber"
          data-testid="phoneNumber"
          // type="number"
          value={inputData.phoneNumber}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="userPassword">Password</label>
        <input
          id="userPassword"
          data-testid="password"
          type="password"
          value={inputData.password}
          onChange={changeHandler}
        />
        <br />
        <button>Submit</button>
      </form>
      {formIsValid ? <h1>Hello {username}</h1> : <p>{errorMessage}</p>}
    </div>
  );
};

export default App;
