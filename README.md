# 🚀 TradeUp Group - Frontend

![TradeUp Group Logo](./src/assets/logo.jpeg)

## 📝 Descrição

Este projeto tem como objetivo criar uma aplicação em React que consome uma API externa para buscar endereços a partir de CEPs. A aplicação permite ao usuário digitar um CEP e obter informações detalhadas sobre o endereço correspondente.

## 🌟 Funcionalidades

- **Página Inicial**:
  - Título e descrição do projeto.
  - Imagem do logo do projeto.
  - Botão que redireciona para a página de pesquisa de CEP.

- **Página de Pesquisa de CEP**:
  - Campo de entrada para digitação do CEP (somente números).
  - Botão para buscar o endereço associado ao CEP.
  - Exibição dos detalhes do endereço encontrado.
  - Botão para voltar à página inicial.

## 📂 Estrutura do Projeto

```plaintext
.
├── public
├── src
│   ├── api
│   │   └── axiosConfig.js
│   ├── assets
│   │   └── logo.jpeg
│   ├── components
│   │   └── CepInput.jsx
│   ├── pages
│   │   ├── home
│   │   │   ├── home.jsx
│   │   │   └── home.css
│   │   ├── pesquisa
│   │   │   ├── pesquisa.jsx
│   │   │   └── pesquisa.css
│   ├── styles
│   │   └── global.css
│   └── index.js
├── .gitignore
└── README.md

````

## 🚀 Como Executar o Projeto

 **Backend (Laravel)**

 1- Clone o repositório:

```plaintext
  git clone https://github.com/SeuUsuario/TradeUp-Group.git
  cd TradeUp-Group/server
````

2- Instale as dependências:

```plaintext
  composer install
````

3- Copie o arquivo de exemplo .env:

```plaintext
  cp .env.example .env
````

4- Configure o arquivo .env com as informações do seu banco de dados.

5- Gere a chave da aplicação:

```plaintext
  php artisan key:generate
````

6- Execute as migrações para criar as tabelas no banco de dados:

```plaintext
  php artisan migrate
````

7- Inicie o servidor de desenvolvimento:

```plaintext
  php artisan serve
````

**Backend (Laravel)**

1- Navegue até o diretório do frontend:

```plaintext
  cd ../frontend
````

2- Instale as dependências:

```plaintext
  npm install
````

3- Inicie o servidor de desenvolvimento:

```plaintext
  npm start
````

## 🔧 Tecnologias Utilizadas

  - React: Biblioteca JavaScript para construção de interfaces de usuário.
  - Axios: Cliente HTTP baseado em Promises para realizar requisições.
  - React Router: Biblioteca para controle de rotas no React.
  - Laravel: Framework PHP para desenvolvimento de aplicações web.
  - MySQL: Sistema de gerenciamento de banco de dados relacional.

## 📸 Screenshots
Página Inicial

Página de Pesquisa de CEP

## 👨‍💻 Desenvolvedor
David Ferreira da Silva

Feito com ❤️ por David 

