import AquaLogo from "../assets/aquatank_logo.png";
import { Link } from "react-router-dom";
import "../style/headerSobre.scss";

export default function HeaderMain() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={AquaLogo} alt="logo" className="img-logo" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <Link className="sobreNosBotao" to="/sobreNos">
            Sobre Nós
          </Link>
          <h2>|</h2>
          <Link className="loginBotao" to="/login">
            Login 
          </Link>
        </div>
      </nav>
    </>
  );
}
