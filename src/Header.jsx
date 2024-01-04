import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from "tw-elements-react";
import { LandingPage } from "./LandingPage";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { StudioMap } from "./StudioMap";
import axios from "axios";

export function Header() {
  const [basicActive, setBasicActive] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked event");
    delete axios.defaults.headers.common["Authorization"];
    console.log("token deleted");
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <header>
      <div>
        <TETabs>
          <Link to="/">
            <TETabsItem onClick={() => handleBasicClick("home")} active={basicActive === "home"}>
              Home
            </TETabsItem>
          </Link>
          <Link to="/studios">
            <TETabsItem onClick={() => handleBasicClick("studio near me")} active={basicActive === "studio near me"}>
              Studio's Near Me
            </TETabsItem>
          </Link>
          {localStorage.jwt === undefined ? (
            <>
              <Link to="/signup">
                <TETabsItem onClick={() => handleBasicClick("Signup")} active={basicActive === "Signup"}>
                  Sign Up
                </TETabsItem>
              </Link>
              <Link to="/login">
                <TETabsItem onClick={() => handleBasicClick("login")} active={basicActive === "login"}>
                  Login
                </TETabsItem>
              </Link>
            </>
          ) : (
            <>
              <Link to="/logout">
                <TETabsItem onClick={handleClick} active={basicActive === "Log out"}>
                  LogOut
                </TETabsItem>
              </Link>
            </>
          )}
        </TETabs>

        <TETabsContent>
          <TETabsPane show={basicActive === "home"}>
            <LandingPage onSelectButton={() => handleBasicClick("studio near me")} />
          </TETabsPane>
          <TETabsPane show={basicActive === "studio near me"}>
            <StudioMap />
          </TETabsPane>
          <TETabsPane show={basicActive === "login"}>
            <Login />
          </TETabsPane>
          <TETabsPane show={basicActive === "Signup"}>
            <Signup />
          </TETabsPane>
        </TETabsContent>
      </div>
    </header>
  );
}
