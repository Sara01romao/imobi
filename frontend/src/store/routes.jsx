import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from "../components/Header";
import { Home } from "../pages/Home";
import { ListaImoveis } from "../pages/Lista-Imoveis";

const Routas=()=>{
    return(
    <BrowserRouter>
       <Header/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/lista-imoveis" element={<ListaImoveis/>}/>
        </Routes>
    
    </BrowserRouter>
    )

}

export default Routas;