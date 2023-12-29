import { Login } from "./Login";
import React, { useState } from "react";
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from "tw-elements-react";
import { LandingPage } from "./LandingPage";
import { Signup } from "./Signup";

// Define the functional component
export function Header() {
  // Initialize state for active tab
  const [basicActive, setBasicActive] = useState("tab1");

  // Handle tab click event
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  // Render the component
  return (
    <header>
      <div className="mb-3">
        <TETabs>
          <TETabsItem onClick={() => handleBasicClick("home")} active={basicActive === "home"}>
            Home
          </TETabsItem>
          <TETabsItem onClick={() => handleBasicClick("tab2")} active={basicActive === "tab2"}>
            Login
          </TETabsItem>
          <TETabsItem onClick={() => handleBasicClick("tab3")} active={basicActive === "tab3"}>
            Studio's Near Me
          </TETabsItem>
          <TETabsItem onClick={() => handleBasicClick("Signup")} active={basicActive === "Signup"}>
            Sign Up
          </TETabsItem>
          <TETabsItem onClick={() => handleBasicClick("tab4")} active={basicActive === "tab4"} disabled>
            Contact
          </TETabsItem>
        </TETabs>

        <TETabsContent>
          <TETabsPane show={basicActive === "home"}>
            <LandingPage />
          </TETabsPane>
          <TETabsPane show={basicActive === "tab2"}>
            <Login />
          </TETabsPane>

          <TETabsPane show={basicActive === "tab3"}>
            <LandingPage />
          </TETabsPane>
          <TETabsPane show={basicActive === "Signup"}>
            <Signup />
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
