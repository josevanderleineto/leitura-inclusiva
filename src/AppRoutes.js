import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./componetes/Header"
import Sobre from "./componetes/Sobre"
import Home from "./componetes/Home"
import './componetes/Pesquisar/pesquisar.css'
import './componetes/ListaArquivos/listaarquivos.css';
import Contato from './componetes/Contato';
import RodaPe from './componetes/RodaPe';
import Catalogo from "./componetes/Catalogo";

function AppRoutes() {
  return (
              <React.Fragment>
                <main>
                <BrowserRouter>
              <Header />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/catalogo" element={<Catalogo/>} />
                <Route path="/contato" element={<Contato/>} />
                <Route path="*" element={<div>Página não encontrada</div>} />
              </Routes>
            </BrowserRouter>
           
           <RodaPe />
           </main>
      </React.Fragment>
     
  );


}

export default AppRoutes;
