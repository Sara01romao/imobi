import React from "react";
import './styles.css';

export function ModalDeletar({ item, setValue }) {
  
  function remover(id) {
    async function removeImovel(id) {
      const res = await fetch(
        `http://localhost/imobi/backend/deletar.php?id=${id}`
      );
      
      if(res.status == 200){

        setValue(null)
      }
      
    }
    removeImovel(id);
  }

  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="info">
          <h3>
            Excluir Imóvel <span>Nº {item}</span>
          </h3>
          <p>Tem certeza que você deseja excluir este imóvel?</p>
        </div>
        <div className="options">
          <button type="button" onClick={() => setValue(null)}>
            Cancelar
          </button>
          <button className="btnRemove" type="button" onClick={() => remover(item)}>
            Confimar
          </button>
        </div>
       
      </div>
    </div>
  );
}
