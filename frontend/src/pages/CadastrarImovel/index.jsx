import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import './styles.css'

export function CadastrarImovel() {
  const [imovel, setImovel] = useState({});

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [data, setData] = useState("");
  let navigate = useNavigate();

  function enviar(e) {
    e.preventDefault();
    setImovel({ titulo, descricao, preco, data });

    async function postApi() {
      const response = await fetch(
        "http://localhost/imobi/backend/cadastrar_Imovel.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(imovel),
        }
      );

      const data = await response.json();
      if (data) {
        navigate("/lista-imoveis");
      }
    }

    if (imovel) {
      postApi();
      setImovel(null);
      setTitulo("");
      setDescricao("");
      setPreco("");
      setData("");
    }
  }
  return (
    <div className="cadastroImovelDiv">
      <h1>Cadastrar Imóvel</h1>

      <form action="" onSubmit={enviar}>
        <div className="divInput">
          <label htmlFor="titulo">Título Imóvel</label>
          <Input type="text" id="titulo" value={titulo} setChange={setTitulo} />
        </div>

        <div className="divInput">
          <label htmlFor="preco">Preço</label>
          <Input type="number" id="preco" value={preco} setChange={setPreco} />
        </div>
        <div className="divInput">
          <label htmlFor="data">Data</label>
          <Input type="date" id="data" value={data} setChange={setData} />
        </div>

        <div className="divInput">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            cols="30"
            rows="10"
             style={{resize: "none"}}
          ></textarea>
          {descricao}
        </div>

        <button> Enviar</button>
      </form>
    </div>
  );
}
