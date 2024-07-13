import React, { useState } from 'react';

const CepInput = ({ onPesquisar }) => {
    const [cep, setCep] = useState(''); // Estado para armazenar o valor do CEP digitado pelo usuário

    // Função para atualizar o estado 'cep' conforme o usuário digita
    const handleChange = (e) => {
        // Remove tudo que não for número
        let formattedCep = e.target.value.replace(/\D/g, '');
        
        // Adiciona o hífen se o CEP tiver mais de 5 caracteres
        if (formattedCep.length > 5) {
            formattedCep = formattedCep.replace(/^(\d{5})(\d{1,3})/, '$1-$2');
        }

        setCep(formattedCep); // Atualiza o estado 'cep' com o valor formatado
    };

    // Função para capturar o evento de pressionar tecla
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') { // Verifica se a tecla pressionada é Enter
            onPesquisar(cep); // Chama a função onPesquisar passando o CEP
        }
    };

    // Função para o clique no botão de pesquisar
    const handlePesquisarClick = () => {
        onPesquisar(cep); // Chama a função onPesquisar passando o CEP
    };

    return (
        <div>
            <input
                type="text"
                value={cep}
                placeholder="Digite o CEP (somente números)"
                onChange={handleChange} // Atualiza o valor do CEP conforme o usuário digita
                onKeyDown={handleKeyDown} // Chama a função de pesquisa ao pressionar Enter
            />
            <button className="btn btn-blue" onClick={handlePesquisarClick}>Pesquisar</button>  {/* Botão para acionar a pesquisa do CEP */}
        </div>
    );
};

export default CepInput;
