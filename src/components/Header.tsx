import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start" />
      <div className="navbar-center">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Book Accommodations
        </Link>
      </div>
      <div className="navbar-end" />
    </div>
  );
};

export default Header;
