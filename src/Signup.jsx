import axios from "axios";
import { useState } from "react";
import { StateDropDown } from "./StateDropDown";
import { TEInput } from "tw-elements-react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        // ------> change to bring user to api page
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="bg-light-white-200">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <TEInput name="name" type="text" label="Name"></TEInput>
          <TEInput name="email" type="email" label="Email"></TEInput>
          <TEInput name="password" type="password" label="Password"></TEInput>
          <TEInput name="password_confirmation" type="password" label="Retype Password"></TEInput>
          <TEInput name="city" type="text" label="City"></TEInput>
          <StateDropDown />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
