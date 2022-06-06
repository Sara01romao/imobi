import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function ListaImoveis() {
  const [imoveis, setImoveis] = useState(null);

  useEffect(() => {
    async function getApi() {
      const res = await fetch(
        "http://localhost/imobi/backend/lista_Imoveis.php"
      );
      const data = await res.json();
      setImoveis(data);
    }
    getApi();
  }, []);

  return (
    <main className="listaImove-container">
      <h1>Lista Imóveis</h1>

      <div className="headerLista">
        <div>
          <input type="search" placeholder="Buscar..." />
          <button>buscar</button>
        </div>
        <Link to="/"> + Cadastrar</Link>
      </div>

      <div className="table-Container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Data de Cadastro</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

              {imoveis? imoveis.map((item)=>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.titulo}</td>
                    <td>{item.descricao}</td>
                    <td>{item.preco}</td>
                    <td>{item.data}</td>
                    <td className="optionsBtns">
                    <Link to="/">Editar</Link>
                    <Link to="/">Excluir</Link>
                    </td>
                </tr>
              ): 
            <tr>
              <td>1</td>
              <td>Casa</td>
              <td>casa Lorem ipsum dolor sit amet.</td>
              <td>250</td>
              <td>01/03/2022</td>
              <td className="optionsBtns">
                  <Link to="/">Editar</Link>
                  <Link to="/">Excluir</Link>
              </td>
            </tr>
           }
          </tbody>
        </table>
      </div>
    </main>
  );
}
