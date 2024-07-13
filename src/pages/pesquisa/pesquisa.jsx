import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig";
import "./pesquisa.css";
import logo from '../../assets/logo.jpeg';
import CepInput from '../../components/CepInput'; // Caminho atualizado para o componente CepInput

const Pesquisa = () => {
    const navigate = useNavigate(); // Hook para navegação
    const [endereco, setEndereco] = useState(null); // Estado para armazenar o endereço retornado pela API
    const [erro, setErro] = useState(''); // Estado para armazenar mensagens de erro

    // Função para buscar o endereço pelo CEP
    const buscarEndereco = async (cep) => {
        try {
            const response = await axios.get(`/cep/${cep}`);
            setEndereco(response.data); // Atualiza o estado 'endereco' com os dados recebidos
            setErro(''); // Limpa qualquer mensagem de erro anterior
        } catch (error) {
            setEndereco(null); // Limpa o endereço
            setErro('CEP não encontrado.'); // Define a mensagem de erro
        }
    };

    return (
        <div className="container-home">
            <img src={logo} className="home-logo" alt="Logo" />
            <div className="title-pesquisa">
                <h1>Teste TradeUp - Group</h1>
                <button onClick={() => navigate("/")} className="btn btn-green">Voltar</button> {/* Botão para voltar à página inicial */}
            </div>
            <div className="lista-pesquisa">
                <h3>Aqui chegamos na página de pesquisa do CEP.</h3>
                <b>O que veremos nesta página?</b>
                <ul>
                    <li>Um campo de pesquisa numérico (CEP) (Deverá conter apenas números - Em formato de CEP).</li>
                    <li>Após preencher o campo, retornará o endereço do CEP pesquisado.</li>
                    <li>O botão voltar com as mesmas configurações da página anterior.</li>
                </ul>
            </div>
            <div className="input-container">
                <CepInput onPesquisar={buscarEndereco} /> {/* Componente para entrada de CEP com máscara e botão de pesquisa */}
            </div>
            {erro && <p className="error-message">{erro}</p>} {/* Exibe mensagem de erro se houver */}
            {endereco && (
                <div className="endereco-container">
                    <h4>Endereço encontrado:</h4>
                    <p><strong>CEP:</strong> {endereco.cep}</p>
                    <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
                    <p><strong>Complemento:</strong> {endereco.complemento}</p>
                    <p><strong>Bairro:</strong> {endereco.bairro}</p>
                    <p><strong>Localidade:</strong> {endereco.localidade}</p>
                    <p><strong>UF:</strong> {endereco.uf}</p>
                </div>
            )}
        </div>
    );
}

export default Pesquisa;
