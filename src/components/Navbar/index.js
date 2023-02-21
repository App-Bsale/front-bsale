import { Button } from "antd";
import { useContext } from "react";
import LogoBsale from "../../assets/image/logo-bsale.svg";
import DarkMode from "../DarkMode/darkMode";
import { SessionContext } from "../../context/SessionContext";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const ctx = useContext(SessionContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    ctx.logout();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="wrapper">
          <div className="container-navbar">
            <img
              className="logo"
              src={LogoBsale}
              alt="logo-navbar"
              onClick={() => navigate("/assignedChallenge")}
            />
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
