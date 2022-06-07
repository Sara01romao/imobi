import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "../../components/Input";

export default function EditarImovel() {
  const { id } = useParams();
  const [imovel, setImovel] = useState({});

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [data, setData] = useState("");

  function editar(){

  }

  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Editar Imóvel</h1>
      <form action="" onSubmit={editar}>
        <div className="divInput">
          <div>
             <label htmlFor="titulo">Título Imóvel</label>
             <p>cód:{id}</p>
          </div>
          
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
            rows="5"
            style={{ resize: "none" }}
          ></textarea>
          
        </div>

        <button> Enviar</button>
      </form>
    </div>
  );
}
