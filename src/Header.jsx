import { Login } from "./Login";
import React, { useState } from "react";
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from "tw-elements-react";
import { LandingPage } from "./LandingPage";
import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { StudioMap } from "./StudioMap";

// Define the functional component
export function Header() {
  // Initialize state for active tab
  const [basicActive, setBasicActive] = useState("");

  // Handle tab click event
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  let authLinks;
  if (localStorage.jwt === undefined) {
    authLinks = (
      <>
        <TETabsItem onClick={() => handleBasicClick("Signup")} active={basicActive === "Signup"}>
          Sign Up
        </TETabsItem>
        <TETabsItem onClick={() => handleBasicClick("login")} active={basicActive === "login"}>
          Login
        </TETabsItem>
      </>
    );
  } else {
    authLinks = (
      <>
        <TETabsItem onClick={() => handleBasicClick("Log out")} active={basicActive === "Log out"}>
          LogOut
        </TETabsItem>
      </>
    );
  }

  // Render the component
  return (
    <header>
      <div className="mb-3">
        <TETabs>
          <TETabsItem onClick={() => handleBasicClick("home")} active={basicActive === "home"}>
            Home
          </TETabsItem>
          <TETabsItem onClick={() => handleBasicClick("studio near me")} active={basicActive === "studio near me"}>
            Studio's Near Me
          </TETabsItem>
          {authLinks}
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

// export function Header() {
//   return (
//     <header>
//       <Link to="/login"> Login </Link>
//     </header>
//   );
// }
