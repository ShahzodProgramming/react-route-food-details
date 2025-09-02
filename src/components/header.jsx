import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>Logo</h1>

      <ul>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
