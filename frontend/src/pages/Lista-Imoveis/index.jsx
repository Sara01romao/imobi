import React, { useEffect, useState } from "react";
import EditIcon from '../../assets/edit-icon.svg';
import TrashIcon from '../../assets/trash-icon.svg'
import { Link } from "react-router-dom";
import "./styles.css";
import { ModalDeletar } from "../../components/ModalDeletar";

export function ListaImoveis() {
  const [imoveis, setImoveis] = useState(null);
  const [modalDelete, setModalDelete] = useState(null);

  useEffect(() => {
    async function getApi() {
      const res = await fetch(
        "http://localhost/imobi/backend/lista_Imoveis.php"
      );
      const data = await res.json();
      setImoveis(data);
    }
    getApi();
  }, [modalDelete]);

  function handleRemove(id){
    setModalDelete(id)
   }

  return (
    <main className="listaImove-container">
      <h1>Lista Imóveis</h1>

      <div className="headerLista">
        <div>
          <input type="search" placeholder="Buscar..." />
          <button>Buscar</button>
        </div>
        <Link to="/cadastrarImovel"> + Cadastrar</Link>
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
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.titulo}</td>
                    <td>{item.descricao}</td>
                    <td>{item.preco}</td>
                    <td>{item.data.split('-').reverse().join('/')}</td>
                    <td className="optionsBtns">
                    <Link to={`/editar-imovel/${item.id}`}><img src={EditIcon} alt="Editar icon" /></Link>
                    <button onClick={()=>handleRemove(item.id)}><img src={TrashIcon} alt="Excluir icon"/></button>
                    </td>
                </tr>
              ): 
            <tr>
              
             
            </tr>
           }
          </tbody>
        </table>
      </div>
      {modalDelete &&  <ModalDeletar item={modalDelete} setValue={setModalDelete}/> }
     
    </main>
  );
}
