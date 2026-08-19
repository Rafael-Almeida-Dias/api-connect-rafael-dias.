# API Connect - MVP

## Objetivo
A **API Connect** é um Produto Mínimo Viável (MVP) desenvolvido para validar uma plataforma de gerenciamento de usuários. O objetivo principal é fornecer uma interface de comunicação back-end veloz, padronizada (JSON) e resiliente, permitindo que a equipe de front-end realize operações de cadastro, listagem, atualização e remoção de registros com total segurança e previsibilidade.

## Tecnologias Utilizadas
*   **Ambiente de Execução:** Node.js
*   **Framework Web:** Express
*   **Geração de IDs:** Módulo nativo `crypto` (UUID v4)
*   **Padronização e Segurança:** CORS e Dotenv
*   **Monitoramento de Desenvolvimento:** Nodemon

## Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Rafael-Almeida-Dias/api-connect-rafael-dias.git](https://github.com/Rafael-Almeida-Dias/api-connect-rafael-dias.git)
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd api-connect-rafael-dias
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O servidor estará acessível na porta 3000 (http://localhost:3000).*

## Referência da API (Endpoints)

A API obedece aos padrões RESTful, retornando objetos sob a chave `data` em caso de sucesso e `error` em caso de falhas.

| Método | Endpoint | Descrição | Status de Sucesso |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/users` | Retorna a listagem de todos os usuários cadastrados. | `200 OK` |
| **GET** | `/api/users/:id` | Busca um usuário específico pelo ID. | `200 OK` |
| **POST** | `/api/users` | Cadastra um novo usuário. Requer `name` e `email` no corpo (JSON). | `201 Created` |
| **PUT** | `/api/users/:id` | Atualiza os dados de um usuário existente. | `200 OK` |
| **DELETE** | `/api/users/:id` | Remove o usuário da base de dados. | `200 OK` |

**Exemplo de Corpo de Requisição (POST/PUT):**
```json
{
  "name": "Rafael Dias",
  "email": "rafael@email.com",
  "role": "admin"
}
```



