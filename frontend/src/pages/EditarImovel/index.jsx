import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../components/Input";

export default function EditarImovel() {
  const { id } = useParams();
  const [imovel, setImovel] = useState({});

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [data, setData] = useState("");
  let navigate = useNavigate();

  function editar(){

  }

  useEffect(() => {
    async function getItem() {
      const res = await fetch(
        "http://localhost/imobi/backend/buscarItem.php?id="+ id
      );
      const data = await res.json();
       if(data){
        setTitulo(data[0].titulo)
        setPreco(data[0].preco)
        setData(data[0].data)
        setDescricao(data[0].descricao)
      } 

    }
    getItem();
  }, [id]);


  function editar(e) {
    e.preventDefault();

    setImovel({ id, titulo, descricao, preco, data });

    

    async function editeApi() {
      const response = await fetch(
        "http://localhost/imobi/backend/editarImovel.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id, titulo, descricao, preco, data}),
        }
      );

      const dataRes = await response.json();
      console.log(dataRes)
      if (dataRes) {
        navigate("/lista-imoveis");
      }
      
    }

    if(imovel){
      editeApi();
    }
    
     
  }

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
