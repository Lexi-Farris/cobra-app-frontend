import axios from "axios";
import { useState } from "react";
import { StateDropDown } from "./StateDropDown";

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
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Retype Password: <input name="password_confirmation" type="password" />
        </div>
        <div>
          City <input name="city" type="text" />
        </div>
        <div>
          <StateDropDown />
        </div>
        <div>
          Zipcode: <input name="zipcode" type="integer" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
