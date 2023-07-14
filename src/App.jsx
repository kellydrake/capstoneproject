import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import logo from "./assets/Logo.svg";
import mobile from "./assets/hamburger-menu.svg";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
    partysize: "",
    specialrequirements: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "First & Last Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email Address",
      required: true,
    },
    {
      id: 3,
      name: "date",
      type: "date",
      placeholder:"date",
      label: "Date & Time",
    },
    {
      id: 4,
      name: "partysize",
      type: "partysize",
      placeholder: "Party Size",
      label: "Party Size",
    },
    {
      id: 5,
      name: "specialrequirements",
      type: "specialrequirements",
      placeholder: "Special Requirements",
      label: "Special Requirements",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <nav className="nav-menu">
      <img src={mobile} alt="mobile hamburger menu icon"/>
      <img className="logo-img" src={logo} alt="logo for little lemon restaurant"/>
      </nav>
      <header className="header">
            <h1 className="title">Little Lemon</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <h2>Book a Table</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;