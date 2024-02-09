import axios from "axios";
import { React, useState } from "react";
import { TEInput } from "tw-elements-react";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "cobra-pose-app.onrender.com";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);

    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <ul>
        {errors.map((error) => (
          <li key="error">{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <TEInput type="email" name="email" label="Email"></TEInput>
        <TEInput type="password" name="password" label="Password"></TEInput>
        <button
          className=" bg- inline-block rounded  px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-green-fam-400 shadow-[0_4px_9px_-4px_#006400] transition duration-150 ease-in-out hover:bg-green-fam-200 hover:shadow-[0_8px_9px_-4px_rgba(59, hover:text-white 113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
