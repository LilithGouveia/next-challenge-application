import { useState } from "react";
import "../../style/cadastro.scss";

export default function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
    name: "",
    email: "",
    senha: "",
  });

  const verificarEmailExistente = async (email) => {
    try {
      const response = await fetch(
        `https://aquatank-api.onrender.com/usuarios?email=${email}`
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
        alert("Este e-mail já está em uso. Tente outro e-mail.");
      } else {
        try {
          const response = await fetch("https://aquatank-api.onrender.com/usuarios", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(novoUsuario),
          });

          if (response.ok) {
            alert("Cadastro realizado com sucesso!");
            setNovoUsuario({ name: "", email: "", senha: "" });

            // Redirecionar para a página de login após o registro bem-sucedido
            window.location.href = "/login";
          } else {
            alert("Falha ao registrar usuário.");
          }
        } catch (error) {
          alert("Ocorreu um erro no processamento da sua solicitação!");
        }
      }
    } else {
      alert("Por favor, preencha todos os campos.");
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
      <button class="btnCad" onClick={handleRegistro}>
        Cadastrar
      </button>
      <button class="btnVolt" onClick={handleVoltarLogin}>
        Voltar para o Login
      </button>
    </div>
  );
}
