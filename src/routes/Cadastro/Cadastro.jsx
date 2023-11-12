import { useState } from "react";
import "../../style/cadastro.scss"

export default function Registro() {
  const [novoUsuario, setNovoUsuario] = useState({
    name: "",
    email: "",
    senha: "",
  });
  const [mensagem, setMensagem] = useState("");

  const verificarEmailExistente = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:3000/usuarios?email=${email}`
      );
      const data = await response.json();
      return data.length > 0;
    } catch (error) {
      console.error("Erro ao verificar e-mail:", error);
      return false;
    }
  };

  const handleRegistro = async () => {
    if (novoUsuario.name && novoUsuario.email && novoUsuario.senha) {
      const emailExistente = await verificarEmailExistente(novoUsuario.email);

      if (emailExistente) {
        setMensagem("Este e-mail já está em uso. Tente outro e-mail.");
      } else {
        try {
          const response = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(novoUsuario),
          });

          if (response.ok) {
            setMensagem("Usuário registrado com sucesso!");
            setNovoUsuario({ name: "", email: "", senha: "" });

            // Redirecionar para a página de login após o registro bem-sucedido
            window.location.href = "/login";
          } else {
            setMensagem("Falha ao registrar usuário.");
          }
        } catch (error) {
          setMensagem("Ocorreu um erro no processamento da sua solicitação!");
        }
      }
    } else {
      setMensagem("Por favor, preencha todos os campos.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario({ ...novoUsuario, [name]: value });
  };

  const handleVoltarLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div class="container">
    <h2 className="cadH">Cadastro de Usuário:</h2>
    <div class="mb-3">
        <input
        type="text"
        class="form-control"
        name="name"
        placeholder="Nome"
        value={novoUsuario.name}
        onChange={handleChange}
        />
    </div>
    <div class="mb-3">
        <input
        type="email"
        class="form-control"
        name="email"
        placeholder="Digite seu email"
        value={novoUsuario.email}
        onChange={handleChange}
        />
    </div>
    <div class="mb-3">
        <input
        type="password"
        class="form-control"
        name="senha"
        placeholder="Digite sua senha"
        value={novoUsuario.senha}
        onChange={handleChange}
        />
    </div>
    <button class="btnCad" onClick={handleRegistro}>Cadastrar</button>
  <button class="btnVolt" onClick={handleVoltarLogin}>Voltar para o Login</button>
    </div>


    // <MDBContainer className="my-5 gradient-form">
    //   <MDBRow>
    //     <MDBCol col="6" className="mb-5">
    //       <form className="d-flex flex-column ms-5">
    //         <div className="text-center">
    //           <img src={AquaLogo} alt="logo" className="img-logo" />
    //         </div>

    //         <p>Faça seu Cadastro:</p>

    //         <MDBInput
    //           wrapperClass="mb-4"
    //           type="text"
    //           name="name"
    //           placeholder="Nome"
    //           value={novoUsuario.name}
    //           onChange={handleChange}
    //         />
    //         <MDBInput
    //           wrapperClass="mb-4"
    //           type="email"
    //           name="email"
    //           placeholder="Digite seu email"
    //           value={novoUsuario.email}
    //           onChange={handleChange}
    //         />
    //         <MDBInput
    //           wrapperClass="mb-4"
    //           type="password"
    //           name="senha"
    //           placeholder="Digite sua senha"
    //           value={novoUsuario.senha}
    //           onChange={handleChange}
    //         />

    //         <div className="text-center pt-1 mb-5 pb-1">
    //           <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleRegistro}>Cadastrar</MDBBtn>
    //           <div className="text-muted">
    //             <a className="custom1" href="/">
    //               Home
    //             </a>
    //           </div>
    //         </div>
    //       </form>
    //       <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
    //         <p className="mb-0">Já possui uma conta?</p>
    //         <div className="mx-2">
    //           <Link to="/login">
    //             <MDBBtn outline id="custom2">
    //               Login
    //             </MDBBtn>
    //           </Link>
    //         </div>
    //       </div>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
  );
}
