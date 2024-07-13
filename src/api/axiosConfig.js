import axios from 'axios';

// Cria uma instância do axios com configurações padrão para a API
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Define a URL base para todas as requisições
    headers: {
        'Content-Type': 'application/json', // Define o tipo de conteúdo padrão como JSON
    }
});

export default api;
