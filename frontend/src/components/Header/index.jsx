import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
   <header>
       <nav>
           <Link to="/">Arquivos</Link>|
           <Link to="/lista-imoveis">Imovéis</Link>
       </nav>
   </header>
  )
}
