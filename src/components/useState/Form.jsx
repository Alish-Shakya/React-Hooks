import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    let data = {
      fullName: fullName,
      email: email,
      password: password,
      contactNo: contactNo,
    };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="fullName"> FullName</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="contactNo">ContactNo:</label>
        <input
          type="number"
          name="contactNO"
          id="contactNo"
          value={contactNo}
          onChange={(e) => {
            setContactNo(e.target.value);
          }}
        />
        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
