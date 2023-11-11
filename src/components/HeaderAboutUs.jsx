import AquaLogo from "../assets/aquatank_logo.png";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "../style/headerAboutUs.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function HeaderAboutUs() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={AquaLogo} alt="logo" className="img-logo" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" className="loginbtn mt-2">Menu</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item> <Link className="sobreNosBotao" to="/">Home</Link></Dropdown.Item>
              <Dropdown.Item> <Link className="sobreNosBotao" to="/sobreNos">Sobre nós</Link></Dropdown.Item>
              <Dropdown.Item> <Link className="loginBotao" to="/login">Login</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </>
  );
}
