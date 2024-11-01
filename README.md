# API de Loja de Carros 🚗

Esta API fornece endpoints RESTful para gerenciar carros em uma loja.  🎉

## Tecnologias Utilizadas
* Node.js: [![Node.js](https://img.shields.io/badge/node.js-%3E%2016-brightgreen)](https://nodejs.org/)
* Express.js: [![Express.js](https://img.shields.io/badge/express.js-4.x-blue)](https://expressjs.com/)


## Endpoints

### Carros 🚘

* **POST /cars** - Cria um novo carro. ✅
    * **Request Body:**
        * `marca` (string, obrigatório)
        * `modelo` (string, obrigatório)
        * `ano` (number, obrigatório)
        * `preco` (number, obrigatório)
    * **Response (201):** O carro criado.
    * **Exemplo cURL:**
        ```bash
        curl -X POST -H "Content-Type: application/json" -d '{"marca": "Toyota", "modelo": "Corolla", "ano": 2023, "preco": 100000}' http://localhost:3000/cars
        ```

* **GET /cars** - Lê todos os carros. 📖
    * **Response (200):** Um array de carros.
    * **Exemplo cURL:**
        ```bash
        curl http://localhost:3000/cars
        ```

* **GET /cars/:id** - Lê um carro pelo ID. 🔎
    * **Response (200):** O carro com o ID especificado.
    * **Response (404):** Carro não encontrado. ⚠️
    * **Exemplo cURL:**
        ```bash
        curl http://localhost:3000/cars/1
        ```

* **PUT /cars/:id** - Atualiza um carro pelo ID. 🔄
    * **Request Body:**
        * `marca` (string, obrigatório)
        * `modelo` (string, obrigatório)
        * `ano` (number, obrigatório)
        * `preco` (number, obrigatório)
    * **Response (200):** O carro atualizado.
    * **Response (404):** Carro não encontrado. ⚠️
    * **Exemplo cURL:**
        ```bash
        curl -X PUT -H "Content-Type: application/json" -d '{"marca": "Honda", "modelo": "Civic", "ano": 2024, "preco": 120000}' http://localhost:3000/cars/1
        ```

* **DELETE /cars/:id** - Deleta um carro pelo ID. 🗑️
    * **Response (204):** Carro deletado com sucesso.
    * **Response (404):** Carro não encontrado. ⚠️
    * **Exemplo cURL:**
        ```bash
        curl -X DELETE http://localhost:3000/cars/1
        ```

## Histórico de Versões

| Versão | Data       | Descrição                               |
|---------|------------|-------------------------------------------|
| 1.0.0   | 2024-07-26 | Versão inicial da API.                   |
|         |            | Adicione informações de versão aqui!     |


## Status do Projeto

* **Cobertura de Testes:** ![Test Coverage](https://img.shields.io/badge/test%20coverage-0%25-red)
