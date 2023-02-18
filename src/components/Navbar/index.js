import { Button } from "antd";
import LogoBsale from "../../assets/image/logo-bsale.svg";
import DarkMode from "../DarkMode/darkMode";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="wrapper">
          <div className="container-navbar">
            <img className="logo" src={LogoBsale} alt="logo-navbar" />
            <div className="text">Desafíate!</div>
            <DarkMode />
          </div>
          <Button
            style={{ maxWidth: "99px" }}
            className="button"
            type="primary"
          >
            Log out
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
