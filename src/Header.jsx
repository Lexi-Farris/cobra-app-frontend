import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from "tw-elements-react";
import { LandingPage } from "./LandingPage";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { StudioMap } from "./StudioMap";

export function Header() {
  const [basicActive, setBasicActive] = useState("");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <header>
      <div className="mb-3">
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
                <TETabsItem onClick={() => handleBasicClick("Log out")} active={basicActive === "Log out"}>
                  LogOut
                </TETabsItem>
              </Link>
            </>
          )}
        </TETabs>

        <TETabsContent>
          <TETabsPane show={basicActive === "home"}>
            <LandingPage />
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
          <TETabsPane show={basicActive === "Log out"}>
            <LogoutLink />
          </TETabsPane>
        </TETabsContent>
      </div>
    </header>
  );
}
