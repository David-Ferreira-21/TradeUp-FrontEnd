import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";  // Importa o componente Home
import Pesquisa from "./pages/pesquisa/pesquisa.jsx";  // Importa o componente Pesquisa
import "./styles/global.css";  // Importa estilos globais CSS

// Cria o root do ReactDOM para renderizar a aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <BrowserRouter>  
      <Routes>  
          <Route path="/" element={<Home />} />  {/* Rota para a página inicial, renderiza o componente Home */}
          <Route path="/pesquisa" element={<Pesquisa />} />  {/* Rota para a página de pesquisa, renderiza o componente Pesquisa */}
      </Routes>
  </BrowserRouter>
);
