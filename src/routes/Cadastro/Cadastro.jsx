import React, { useState } from "react";

export default function Registro() {
  const [novoUsuario, setNovoUsuario] = useState({
    name: "",
    email: "",
    senha: "",
  });
  const [mensagem, setMensagem] = useState("");

  const verificarEmailExistente = async (email) => {
    try {
      const response = await fetch(`http://localhost:3000/usuarios?email=${email}`);
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

  return (
    <div>
      <h2>Registro de Usuário</h2>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={novoUsuario.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Digite seu email."
        value={novoUsuario.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="senha"
        placeholder="Digite sua senha."
        value={novoUsuario.senha}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleRegistro}>Registrar</button>
      <p>{mensagem}</p>
    </div>
  );
}
