import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";  // Importa estilos CSS específicos para esta página
import logo from '../../assets/logo.jpeg';  // Importa o logo da pasta de assets

const Home = () => {
    const navigate = useNavigate();  // Hook do React Router para navegação entre páginas

    return (
        <div className="container-home"> 
            <img src={logo} className="home-logo" alt="Logo" />  {/* Renderiza o logo */}
            <div className="title-home"> 
                <h1>Teste TradeUp - Group</h1>  
                <button onClick={() => navigate("/pesquisa")} className="btn btn-green">Página de Pesquisa</button>  {/* Botão que redireciona para a página de pesquisa */}
            </div>
            <div className="lista-home"> 
                <h3>Este projeto tem como objetivo criar uma API que leia CEP por alguma API externa.</h3>  {/* Descrição principal */}
                <b>O que veremos nesta página?</b>
                <ul>
                    <li>Título.</li> 
                    <li>Descrição.</li> 
                    <li>Imagem.</li>
                    <li>Botão que abre outra página(Utilizando Router).</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
