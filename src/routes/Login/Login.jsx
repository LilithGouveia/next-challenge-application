import "../../style/login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FormLogin() {
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

    for (let x = 0; x < users.lenght; x++) {
      user = users[x];
      if (user.email == usuario.email && user.senha == usuario.senha) {
        alert("Login realizado com sucesso!");
        const tokenUser = Math.random().toString(16).substring(2);
        console.log(tokenUser);
        sessionStorage.setItem("token-user", tokenUser);
        sessionStorage.setItem("data-user", JSON.stringify(user));
        navigate("/");
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
    <>
      <body>
        <div className="wrapper">
          <div className="container main">
            <div className="row">
              <div className="col-md-6 side-image" />
              <div className="col-md-6 right">
                <div className="input-box">
                  <header>Logue aqui</header>
                  <div className="input-field">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      id="idEmail"
                      autoComplete="off"
                      value={usuario.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="idEmail">E-mail</label>
                  </div>
                  <div className="input-field">
                    <input
                      className="input"
                      type="password"
                      name="senha"
                      id="idSenha"
                      value={usuario.senha}
                      onChange={handleChange}
                    />
                    <label htmlFor="idSenha">Senha</label>
                  </div>
                  <div className="input-field"></div>
                  <div className="signin">
                    <button className="loginPoha">Login</button>
                  </div>
                  <div className="signin">
                    <span>Não tem uma conta? <Link href="#">Inscreva-se</Link></span>
                  </div>
                  <div className="backhome">
                    <Link className="homebtn" to="/">Home</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

