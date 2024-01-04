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
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="border border-solid border-gray-300 p-4 w-1/2 mx-auto z-1">
      <h1 className="text-center text-2xl font-bold z-2">SIGN UP</h1>
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
        <button
          className="inline-block rounded bg-green px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-fam-200 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
