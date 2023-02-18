import { Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoBsale from "../../assets/image/logo-bsale.svg";
import DarkMode from "../DarkMode/darkMode";
import { SessionContext } from "../../context/SessionContext";
import "./navbar.css";

const Navbar = () => {
  const ctx = useContext(SessionContext);

  const handleLogout = () => {
    sessionStorage.clear();
    ctx.logout();
    console.log(ctx.session);
  };

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
            onClick={handleLogout}
          >
            Log out
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
