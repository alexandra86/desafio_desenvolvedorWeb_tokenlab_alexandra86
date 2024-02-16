<h1 align="center" font-family="pattaya">TL Events</h1><br>

<h2 font-family="pattaya">Tecnologias utilizadas</h2>
<div style="display: inline_block"><br>
<img align="center" alt="Alexandra-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
   <img align="center" alt="Alexandra-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Alexandra-postgreSQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg">  
</div><br>

<h2 font-family="pattaya">Descrição</h2><br>
<p font-family="robotto" font-size="16px" line-height="34px" align="justify">
A API é referente a uma aplicação de agendamento de eventos, onde um usuário pode criar um perfil, cadastrar, atualizar ou deletar os seus eventos.<br>
Ao criar ou editar um evento, é enviado um e-mail de notificação para o usuário, informando que o mesmo está próximo do seu acontecimento.<br>
É feita de forma automática pelo sistema, a exclusão dos eventos, caso já tenham sido realizados.
</p><br>

<h2 font-family="pattaya">Libs utilizadas</h2><br>
<ul style="display: inline_block">
<li font-family="robotto" font-size="16px">bcryptjs: "^2.4.3",</li>
<li font-family="robotto" font-size="16px">cors: "^2.8.5",</li>
<li font-family="robotto" font-size="16px">cron: "^3.1.6"</li>
<li font-family="robotto" font-size="16px">dotenv: "^16.3.2"</li>
<li font-family="robotto" font-size="16px">express: "^4.18.2"</li>
<li font-family="robotto" font-size="16px">express-async-errors: "^3.1.1"</li>
<li font-family="robotto" font-size="16px">jsonwebtoken: "^9.0.2"</li>
<li font-family="robotto" font-size="16px">moment: "2.30.1"</li>
<li font-family="robotto" font-size="16px">nodemailer: "^6.9.9"</li>
<li font-family="robotto" font-size="16px">pg: "^8.11.3"</li>
<li font-family="robotto" font-size="16px">reflect-metadata: "^0.2.1">
<li font-family="robotto" font-size="16px">typeorm: "0.3.15"</li>
<li font-family="robotto" font-size="16px">zod: "^3.22.4"</li>
</ul><br>


# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://yarnpkg.com/package/zod)

A URL base da aplicação:
http://localhost:3000

---

## 2. Diagrama de Entidade de Relacionamentos (DER)
[ Voltar para o topo ](#tabela-de-conteúdos)


Diagrama DER da API definindo tabelas utilizadas e  seus relacionamentos no banco de dados.

![DER](tlCallendar.png)

---
## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do PostgresSQL e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:generate src/migrations/create<nome-da-class> -d src/data-source.ts
yarn typeorm migration:run -d src/data-source.ts
```

## 4. Autenticação
[ Voltar para o topo ](#tabela-de-conteúdos)


Na aplicação foi usada a biblioteca [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para criação de token e autenticação do usuário.

---
## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

## **users**

A tabela users é definida como:

| Campo      | Tipo   | Descrição                                     |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário                  |
| name       | string | O nome do usuário.                              |
| email      | string | O e-mail do usuário.                            |
| password   | string | A senha de acesso do usuário                   |
| phone     | string | O telefone do usuário   |
| image    | text | A imagem do usuário   |
| gender    | string  | enum com as opções: "male", "female", "no binary", "I prefer not to say"   |


### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /users     | Criação de um usuário.                  |
| GET      | /users    | Lista todos os usuário.                 |
| GET      | /users/:userId | Lista um usuário, usando seu ID como parâmetro|
| PATCH    | /users/:userId | Atualiza um usuário, usando seu ID como parâmetro|
| DELETE   | /users/:userId | Deleta um usuário, usando seu ID como parâmetro| 

---

### 1.1. **Criar Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "Lucas Ferreira",
	"email": "lucasfer@mail.com",
	"password": "Ale12345678",
	"phone": "21985632224",
	"gender": "male"
}
```
### Resposta da Requisição:
```json
{
	"name": "Lucas Ferreira",
	"email": "lucasfer@mail.com",
	"phone": "21985632224",
	"image": null,
	"gender": "male",
	"id": 2
}

OBS: Não há retorno da senha na resposta da requisição.
```
### 1.2. **Listar todos usuários**
```
GET /users
Host: http://localhost:3000
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:
```
Não possui body.
```
### Resposta da Requisição:
```json
[
	{
		"name": "Alexandra Miranda",
		"email": "alexyamiranda7@gmail.com",
		"phone": "(21) 98996-4940",
		"image": "https://media.licdn.com/dms/image/D4D03AQFn9vhT_A5ibg/profile-displayphoto-shrink_800_800/0/1701082727869?e=2147483647&v=beta&t=xWird_H7fVYbzfnzav7TlEc4fuKupcpMnL21_apqIEY",
		"gender": "female",
		"id": 1
	}
]
```
### 1.3. **Listar usuário por id**
### Exemplo de Request:
```
GET /users/:userId
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso.
Content-type: application/json
```

### Corpo da Requisição:
```
Não possui body.
```
### Resposta da Requisição:
```json
{
	"user": {
		"name": "Alexandra Miranda",
		"email": "alexyamiranda7@gmail.com",
		"phone": "(21) 98996-4940",
		"image": "https://media.licdn.com/dms/image/D4D03AQFn9vhT_A5ibg/profile-displayphoto-shrink_800_800/0/1701082727869?e=2147483647&v=beta&t=xWird_H7fVYbzfnzav7TlEc4fuKupcpMnL21_apqIEY",
		"gender": "female",
		"id": 1
	},
	"events": [
		{
			"id": 5,
			"nameEvent": "Reunião Escolar",
			"description": "Falar sobre as aulas de Inglês.",
			"dateEvent": "2024-02-20",
			"startTime": "16:00:00",
			"endTime": "17:00:00"
		},
		{
			"id": 3,
			"nameEvent": "Reunião Diretoria",
			"description": "Reunião para falar sobre o planejamento do ano.",
			"dateEvent": "2024-02-22",
			"startTime": "16:00:00",
			"endTime": "17:00:00"
		},
		{
			"id": 1,
			"nameEvent": "Reunião Marketing",
			"description": "Falar sobre as campanhas do produto XYZ.",
			"dateEvent": "2024-02-02",
			"startTime": "16:00:00",
			"endTime": "17:00:00"
		}
	]
}

OBS: Nesta rota há o array de eventos na resposta da requisição.
```
### 1.4. **Atualizar usuário por id**

### Exemplo de Request:
```
PATCH /users/:userId
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso.
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"image" : "https://media.licdn.com/dms/image/D4D03AQFn9vhT_A5ibg/profile-displayphoto-shrink_800_800/0/1701082727869?e=2147483647&v=beta&t=xWird_H7fVYbzfnzav7TlEc4fuKupcpMnL21_apqIEY"
}
```
### Resposta da Requisição:
```json
{
	"name": "Alexandra Miranda",
	"email": "alexyamiranda7@gmail.com",
	"phone": "(21) 98996-4940",
	"image": "https://media.licdn.com/dms/image/D4D03AQFn9vhT_A5ibg/profile-displayphoto-shrink_800_800/0/1701082727869?e=2147483647&v=beta&t=xWird_H7fVYbzfnzav7TlEc4fuKupcpMnL21_apqIEY",
	"gender": "female",
	"id": 1
}
```

### 1.5. **Deletar usuário por id**

### Exemplo de Request:
```
DELETE /clients/:id
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso
Content-type: application/json
```

### Corpo da Requisição:
```
Não possui body
```
### Resposta da Requisição:
```
Retorna apenas o status 204.
```


### 2.1. **Login**

[ Voltar para os Endpoints ](#5-endpoints)

### `/login`

### Exemplo de Request:
```
POST /login
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"email": "alexyamiranda7@gmail.com",
	"password": "Ale12345678"
}
```
### Resposta da Requisição:
```json
{
	"token": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXh5YW1pcmFuZGE3QGdtYWlsLmNvbSIsImlhdCI6MTcwNjc0NTAzNiwiZXhwIjoxNzA2ODMxNDM2LCJzdWIiOiIxIn0.Kbpj4n3lCujvIijK2X39XjCJWqc4EXPngJMsHxUyyDA",
		"user": {
			"id": 1,
			"name": "Alexandra Miranda",
			"email": "alexyamiranda7@gmail.com",
			"phone": "(21) 98996-4940",
			"image": "https://media.licdn.com/dms/image/D4D03AQFn9vhT_A5ibg/profile-displayphoto-shrink_800_800/0/1701082727869?e=2147483647&v=beta&t=xWird_H7fVYbzfnzav7TlEc4fuKupcpMnL21_apqIEY",
			"gender": "female"
		}
	}
}
```
## **events**

A tabela events é definida como:

| Campo      | Tipo   | Descrição                                     |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do evento                 |
| description       | string | A descrição do evento.                              |
| dateEvent      | string | A data do evento.                            |
| startTime     | string | A hora inicial do evento.  |
| endTime   | string  | A hora final do evento.   |


### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /events     | Criação de um evento.                  |
| GET      | /events     | Lista todos os eventos.                 |
| GET      | /events/:eventId | Lista um evento, usando seu ID como parâmetro|
| PATCH    | /events/:eventId | Atualiza um evento, usando seu ID como parâmetro|
| DELETE   | /events/:eventId | Deleta um evento, usando seu ID como parâmetro| 

---

### 3.1. **Criar Evento**

[ Voltar para os Endpoints ](#5-endpoints)

### `/events`

### Exemplo de Request:
```
POST /events
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso.
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"nameEvent": "Reunião",
	"description": "Reunião para falar sobre o planejamento do ano.",
	"dateEvent": "15/02/2024",
	"startTime": "16:00",
	"endTime": "17:00"
}
```
### Resposta da Requisição:
```json
{
	"nameEvent": "Reunião",
	"description": "Reunião para falar sobre o planejamento do ano.",
	"dateEvent": "2024-02-15",
	"startTime": "16:00:00",
	"endTime": "17:00:00",
	"id": 3
}
```
### 3.2. **Listar todos eventos**
```
GET /events
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso.
Content-type: application/json
```

### Corpo da Requisição:
```
Não possui body.
```
### Resposta da Requisição:
```json
[
	{
		"nameEvent": "Reunião Escolar",
		"description": "Falar sobre as aulas de Inglês.",
		"dateEvent": "2024-02-20",
		"startTime": "16:00:00",
		"endTime": "17:00:00",
		"id": 5
	},
	{
		"nameEvent": "Reunião Diretoria",
		"description": "Reunião para falar sobre o planejamento do ano.",
		"dateEvent": "2024-02-22",
		"startTime": "16:00:00",
		"endTime": "17:00:00",
		"id": 3
	},
	{
		"nameEvent": "Reunião Marketing",
		"description": "Falar sobre as campanhas do produto XYZ.",
		"dateEvent": "2024-02-02",
		"startTime": "16:00:00",
		"endTime": "17:00:00",
		"id": 1
	}
]
```
### 3.3. **Listar evento por id**
### Exemplo de Request:
```
GET /events/:eventId
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário  para acesso.
Content-type: application/json
```

### Corpo da Requisição:
```
Não possui body.
```
### Resposta da Requisição:
```json
{
	"nameEvent": "Reunião Marketing",
	"description": "Falar sobre as campanhas do produto XYZ.",
	"dateEvent": "2024-02-02",
	"startTime": "16:00:00",
	"endTime": "17:00:00",
	"id": 1,
	"user": {
		"name": "Alexandra Miranda",
		"email": "alexyamiranda7@gmail.com",
		"phone": "(21) 98996-4940",
		"image": "https://media.licdn.com/dms/image/D4D03AQFn9vhT_A5ibg/profile-displayphoto-shrink_800_800/0/1701082727869?e=2147483647&v=beta&t=xWird_H7fVYbzfnzav7TlEc4fuKupcpMnL21_apqIEY",
		"gender": "female",
		"id": 1
	}
}

OBS: Nesta rota há o objeto usuário na resposta da requisição.
```
### 3.4. **Atualizar evento por id**

### Exemplo de Request:
```
PATCH /events/:eventId
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso.
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"nameEvent": "Reunião Diretoria"
}
```
### Resposta da Requisição:
```json
{
	"nameEvent": "Reunião Diretoria",
	"description": "Reunião para falar sobre o planejamento do ano.",
	"dateEvent": "2024-02-22",
	"startTime": "16:00:00",
	"endTime": "17:00:00",
	"id": 3
}
```

### 3.5. **Deletar evento por id**

### Exemplo de Request:
```
DELETE /events/:eventId
Host: http://localhost:3000
Authorization: esta rota necessita do token do usuário para acesso.
Content-type: application/json
```

### Corpo da Requisição:
```
Não possui body
```
### Resposta da Requisição:
```
Retorna apenas o status 204.
```

### 4.1. **Enviar Notificação de evento**

[ Voltar para os Endpoints ](#5-endpoints)

### `/event-alert`
```
GET /event-alert
Host: http://localhost:3000
Authorization: none.
Content-type: application/json
```

### Corpo da Requisição:
```
Não possui body.
```
### Resposta da Requisição:
```json
{
	"message": "Check upcoming events completed."
}
```

### Exemplo de possíveis erros de request.
### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| id     | number     | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"name": "Alexandra Miranda",
		"email": "alexyamiranda7@gmail.com",
		"phone": "(21) 98996-4940",
		"image": "https://media.licdn.com/dms/image/D4D03AQFn9vhT_A5ibg/profile-displayphoto-shrink_800_800/0/1701082727869?e=2147483647&v=beta&t=xWird_H7fVYbzfnzav7TlEc4fuKupcpMnL21_apqIEY",
		"gender": "female",
		"id": 1
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | "message": "User not found!" |


