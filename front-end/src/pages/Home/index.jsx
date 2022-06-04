export function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <div>
        <input type="search" placeholder="Buscar..."/>
        <button>buscar</button>
      </div>
      
      <button>Cadastrar</button>
      <table>
        <tr>
          <th>Id</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Data de Cadastro</th>
          <th></th>
        </tr>
        <tr>
          <td>01</td>
          <td>Casa</td>
          <td>
            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </td>
          <td>R$ 250000</td>
          <td>12/02/2022</td>
          <td>
            <button>Editar</button>
            <button>Remover</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
