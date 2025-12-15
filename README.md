<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

API REST para gerenciamento de seguros de vida, desenvolvida com NestJS, TypeORM e MySQL.

## Equipe de Desenvolvimento

### Product Owner (PO)
- **Nome:** [Aiyra Johann]
- **GitHub:** [@aiyrajohann](https://github.com/aiyrajohann)

### Desenvolvedores
- **Dev 1:** [Mamadou] - [@mamadudev](https://github.com/mamadudev)
- **Dev 2:** [Nathália] - [@nathzeraz](https://github.com/nathzeraz)
- **Dev 3:** [Andrey] - [@ndreyrsy](https://github.com/andreyrsy)
- **Dev 4:** [Nicolas] - [@nicolasdonada](https://github.com/nicolasdonada)
- **Dev 5:** [Ana] - [@auranode](https://github.com/auranode)

### Tester (QA)
- **Nome:** [Marcos]
- **GitHub:** [@MarcosCRosa](https://github.com/MarcosCRosa)

## Funcionalidades

- **CRUD de Usuários**: Criar, listar, buscar, atualizar e deletar usuários
- **Relacionamentos**: Endereço e Contato de Emergência vinculados ao usuário
- **Validação de dados**: Validação automática com class-validator
- **Banco de dados**: MySQL com TypeORM

## Estrutura do Projeto

```
src/
├── usuario/
│   ├── entities/
│   │   └── usuario.entity.ts
│   ├── controller/
│   │   └── usuario.controller.ts
│   ├── services/
│   │   └── usuario.service.ts
│   └── app.usuario.module.ts
├── endereco/
│   ├── entities/
│   │   └── endereco.entity.ts
│   ├── services/
│   │   └── endereco.service.ts
│   └── app.endereco.module.ts
├── contatoEmergencia/
│   ├── entities/
│   │   └── contatoEmergencia.entity.ts
│   ├── services/
│   │   └── contatoEmergencia.service.ts
│   └── app.contatoEmergencia.module.ts
├── app.module.ts
└── main.ts
```

## Pré-requisitos

- Node.js (v18 ou superior)
- MySQL (v8 ou superior)
- npm ou yarn

## Configuração do Banco de Dados

1. Instale e inicie o MySQL
2. Crie o banco de dados:
```sql
CREATE DATABASE db_segura_vida;
```

3. Configure as credenciais em `src/app.module.ts`:
```typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'SUA_SENHA_AQUI', // Altere aqui
  database: 'db_segura_vida',
  entities: [ContatoEmergencia, Endereco, Usuario],
  synchronize: true,
})
```

## Instalação

```bash
$ npm install
```

## Executar o Projeto

```bash
# modo desenvolvimento
$ npm run start

# modo watch (recarrega automaticamente)
$ npm run start:dev

# modo produção
$ npm run start:prod
```

A aplicação estará disponível em `http://localhost:4000`

## Documentação da API

### Endpoints Disponíveis

#### 1. Listar Todos os Usuários
```http
GET /usuarios
```

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "dataNascimento": 19900515,
    "cpf": "123.456.789-00",
    "email": "joao.silva@email.com",
    "rendaMensal": 5000.00,
    "endereco": {
      "id": 1,
      "rua": "Rua das Flores",
      "numero": "123",
      "cidade": "São Paulo",
      "cep": "01234-567"
    },
    "contatoEmergencia": {
      "id": 1,
      "nome": "Maria Silva",
      "telefone": "11987654321",
      "grauParentesco": "Esposa"
    }
  }
]
```

#### 2. Buscar Usuário por ID
```http
GET /usuarios/:id
```

**Exemplo:**
```http
GET /usuarios/1
```

**Resposta de Sucesso (200):** Retorna os dados do usuário
**Resposta de Erro (404):** `{"message": "Usuário não encontrado"}`

#### 3. Buscar Usuários por Nome
```http
GET /usuarios/nome/:nome
```

**Exemplo:**
```http
GET /usuarios/nome/João
```

**Resposta de Sucesso (200):** Retorna array com usuários que contêm o nome buscado

#### 4. Criar Novo Usuário
```http
POST /usuarios
Content-Type: application/json
```

**Corpo da Requisição:**
```json
{
  "nome": "João Silva",
  "dataNascimento": 19900515,
  "cpf": "123.456.789-00",
  "email": "joao.silva@email.com",
  "rendaMensal": 5000.00,
  "endereco": {
    "rua": "Rua das Flores",
    "numero": "123",
    "cidade": "São Paulo",
    "cep": "01234-567"
  },
  "contatoEmergencia": {
    "nome": "Maria Silva",
    "telefone": "11987654321",
    "grauParentesco": "Esposa"
  }
}
```

**Resposta de Sucesso (201):** Retorna o usuário criado com IDs gerados

**Observações:**
- `dataNascimento` deve estar no formato YYYYMMDD (ex: 19900515 = 15/05/1990)
- `telefone` deve ser string
- `rendaMensal` deve ser número decimal

#### 5. Atualizar Usuário
```http
PUT /usuarios
Content-Type: application/json
```

**Corpo da Requisição:**
```json
{
  "id": 1,
  "nome": "João Silva Santos",
  "dataNascimento": 19900515,
  "cpf": "123.456.789-00",
  "email": "joao.santos@email.com",
  "rendaMensal": 5500.00,
  "endereco": {
    "id": 1,
    "rua": "Rua das Flores",
    "numero": "123A",
    "cidade": "São Paulo",
    "cep": "01234-567"
  },
  "contatoEmergencia": {
    "id": 1,
    "nome": "Maria Silva Santos",
    "telefone": "11987654321",
    "grauParentesco": "Esposa"
  }
}
```

**Resposta de Sucesso (200):** Retorna o usuário atualizado
**Resposta de Erro (404):** `{"message": "Usuário não encontrado"}`

**Observação:** Deve incluir os IDs do usuário, endereço e contato de emergência

#### 6. Deletar Usuário
```http
DELETE /usuarios/:id
```

**Exemplo:**
```http
DELETE /usuarios/1
```

**Resposta de Sucesso (204):** Sem conteúdo (usuário deletado)
**Resposta de Erro (404):** `{"message": "Usuário não encontrado"}`

**Observação:** Deleta também o endereço e contato de emergência relacionados (cascade)

## Testando com Insomnia

1. Importe o arquivo `insomnia_tests.json` no Insomnia
2. Os endpoints já estarão configurados e prontos para uso
3. A URL base está configurada como `http://localhost:4000`

**Passo a passo:**
- Abra o Insomnia
- Clique em "Create" → "Import"
- Selecione o arquivo `insomnia_tests.json`
- Todos os 6 endpoints estarão disponíveis

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
