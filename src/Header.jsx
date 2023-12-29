import { Collapse, Ripple, initTE } from "tw-elements";
import { Link } from "react-router-dom";

initTE({ Collapse, Ripple });

export function Header() {
  return (
    <header>
      <Link to="/login"> Login </Link>
    </header>
  );
}
