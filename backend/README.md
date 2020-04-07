# Backend

- Node.js
- Express
- Knex
- Celebrate
- Jest

## Instalação

Para executar o backend em modo de desenvolvimento, instale as dependencias e execute o script `dev`.

```cmd
cd backend
npm install
npm run dev
```

Após estes comandos, o servidor estará pronto para atender as requisições HTTP.

## Documentação

### Rotas da aplicação

Método | Rota | Descrição
-------|------|----------
POST | /session | permite o login de uma ong
GET | /ongs | lista as ongs cadastradas
POST | /ongs | cria uma nova ong
GET | /profile | lista os casos de uma ong
POST | /incidents | cria um novo caso
GET | /incidens | lista todos os casos
DELETE | /incidents/:id | apaga um caso
