import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/login.scss";
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import AquaLogo from "../../assets/aquatank_logo.png";

export default function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let users;
    let user = users;

    try {
      const response = await fetch("http://localhost:3000/usuarios");
      users = await response.json();
    } catch (error) {
      alert("Ocorreu um erro no processamento da sua solicitação!");
    }
    for (let x = 0; x < users.length; x++) {
      user = users[x];
      if (user.email == usuario.email && user.senha == usuario.senha) {
        alert("Login realizado com sucesso!");
        const tokenUser = Math.random().toString(16).substring(2);
        console.log(tokenUser);
        sessionStorage.setItem("token-user", tokenUser);
        sessionStorage.setItem("data-user", JSON.stringify(user));
        navigate("/dashboard");
        return;
      }
    }

    alert("Login ou senha incorretos!");
    setUsuario({
      email: "",
      senha: "",
    });
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <form className="d-flex flex-column ms-5" onSubmit={handleSubmit}>
            <div className="text-center">
              <img src={AquaLogo} alt="logo" className="img-logo" />
            </div>

            <p>Faça seu login:</p>

            <MDBInput
              wrapperClass="mb-4"
              label="Endereço de Email"
              type="email"
              name="email"
              id="idEmail"
              placeholder="Digite seu email"
              value={usuario.email}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Senha"
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite sua senha"
              value={usuario.senha}
              onChange={handleChange}
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Login</MDBBtn>
              <div className="text-muted">
                <a className="custom1" href="/">
                  Home
                </a>
              </div>
            </div>
          </form>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Não possui uma conta?</p>
            <div className="mx-2">
              <Link to="/cadastro">
                <MDBBtn outline id="custom2">Registrar</MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">Somos muito mais que um aquário!</h4>
              <p class="small mb-0">
                O AquaTank é uma cápsula de algas inteligente que não só capta o
                CO2 presente no ar, mas também o converte em oxigênio a cada
                precioso segundo. O projeto é uma solução visionária que
                redefine a maneira como respiramos e interagimos com o ambiente
                urbano.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
