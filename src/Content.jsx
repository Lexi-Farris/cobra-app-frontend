import { LandingPage } from "./LandingPage";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Route, Routes } from "react-router-dom";

export function Content() {
  return (
    <div>
      <Routes>{/* <Route path="/login" element={<Login />} /> */}</Routes>
      {/* <LandingPage />
      <Signup /> */}
    </div>
  );
}
