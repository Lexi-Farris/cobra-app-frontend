import { Ripple } from "tw-elements";
import { useEffect } from "react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    //  Footer
    <footer className="flex flex-col items-center text-center text-white bg-green-fam-300 ">
      <div className="container p-6 ">
        <p className="flex items-center justify-center m-0 p-0">
          <span className="mr-4">Find Yoga Studio's Near You</span>
        </p>
      </div>

      {/* <!--Copyright section--> */}
      <div className="w-full p-4 text-center bg-green-fam-200 text-light-white-100 ">
        © 2024
        <Link to="/"> Cobra Pose App</Link>
      </div>
    </footer>
  );
}
