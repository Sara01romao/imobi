import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">Imobi</Link>
        <ul>
          <li>
            <Link to="/">Arquivos</Link>
          </li>
          <li>
             <Link to="/lista-imoveis">Imovéis</Link>
          </li>
        </ul>
        
        
      </nav>
    </header>
  );
}
