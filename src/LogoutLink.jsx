import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked event");
    delete axios.defaults.headers.common["Authorization"];
    console.log("token deleted");
    localStorage.removeItem("jwt");
    // window.location.href = "/";
  };

  return (
    <a href="#" onClick={handleClick}>
      {" "}
      Logout
    </a>
  );
}
