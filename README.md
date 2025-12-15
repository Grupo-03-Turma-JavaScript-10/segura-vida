# 🛡️ Segura Vida - API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

## 📋 Descrição

API REST para gerenciamento de seguros de vida, desenvolvida com **NestJS**, **TypeORM** e **MySQL**. O sistema permite o cadastro de usuários com seus respectivos endereços, contatos de emergência e planos de seguro de vida.

---

## 👥 Equipe de Desenvolvimento

| Função            | Nome         | GitHub                                             |
| ----------------- | ------------ | -------------------------------------------------- |
| **Product Owner** | Aiyra Johann | [@aiyrajohann](https://github.com/aiyrajohann)     |
| **Dev**           | Mamadou      | [@mamadudev](https://github.com/mamadudev)         |
| **Dev**           | Nathália     | [@nathzeraz](https://github.com/nathzeraz)         |
| **Dev**           | Andrey       | [@andreyrsy](https://github.com/andreyrsy)          |
| **Dev**           | Nicolas      | [@nicolasdonada](https://github.com/nicolasdonada) |
| **Dev**           | Ana          | [@auranode](https://github.com/auranode)           |
| **Tester**     | Marcos       | [@MarcosCRosa](https://github.com/MarcosCRosa)     |

---

## ✨ Funcionalidades

- ✅ **CRUD Completo de Usuários**: Criar, listar, buscar, atualizar e deletar usuários
- ✅ **Gestão de Seguros de Vida**: Criar e listar seguros vinculados a usuários
- ✅ **Relacionamentos**: Endereço, Contato de Emergência e Seguros vinculados ao usuário
- ✅ **Validação de dados**: Validação automática com `class-validator`
- ✅ **Banco de dados**: MySQL com TypeORM

---

## 🗂️ Estrutura do Projeto

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
├── seguroVida/
│   ├── entities/
│   │   └── seguroVida.entity.ts
│   ├── controller/
│   │   └── seguroVida.controller.ts
│   ├── services/
│   │   └── seguroVida.service.ts
│   └── app.seguroVida.module.ts
├── app.module.ts
└── main.ts
```

## ⚙️ Pré-requisitos

- Node.js (v18 ou superior)
- MySQL (v8 ou superior)
- npm ou yarn

---

## 🗄️ Configuração do Banco de Dados

1. Instale e inicie o MySQL
2. Crie o banco de dados:

```sql
CREATE DATABASE db_segura_vida;
```

3. Configure as credenciais em `src/app.module.ts`:

````typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'SUA_SENHA_AQUI', // Altere aqui
  database: 'db_segura_vida',
  entities: [ContatoEmergencia, Endereco, Usuario, SeguroVida],
  synchronize: true,
});

---

## 📦 Instalação

```bash
$ npm install
````

---

## 🚀 Executar o Projeto

```bash
# modo desenvolvimento
$ npm run start

# modo watch (recarrega automaticamente)
$ npm run start:dev

# modo produção
$ npm run start:prod
```

> A aplicação estará disponível em `http://localhost:4000`

---

## 📖 Documentação da API

### 👤 Endpoints de Usuário

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
    "rendaMensal": 5000.0,
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
  "rendaMensal": 5000.0,
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
  "rendaMensal": 5500.0,
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

> **Observação:** Deleta também o endereço, contato de emergência e seguros relacionados (cascade)

---

### 🛡️ Endpoints de Seguro de Vida

#### 7. Listar Todos os Seguros de Vida

```http
GET /segurovida
```

**Resposta de Sucesso (200):**

```json
[
  {
    "id": 1,
    "valorAssegurado": 100000.0,
    "tipoSeguro": "Vida Individual",
    "usuario": {
      "id": 1,
      "nome": "João Silva"
    }
  }
]
```

#### 8. Criar Novo Seguro de Vida

```http
POST /segurovida
Content-Type: application/json
```

**Corpo da Requisição:**

```json
{
  "valorAssegurado": 100000.0,
  "tipoSeguro": "Vida Individual",
  "usuario": {
    "id": 1
  }
}
```

**Resposta de Sucesso (201):** Retorna o seguro criado com ID gerado

**Observações:**

- `valorAssegurado` deve ser número decimal
- `tipoSeguro` deve ser string (máximo 70 caracteres)
- O usuário informado deve existir no sistema

---

## 🔗 Diagrama de Relacionamentos

```
┌─────────────────┐       ┌─────────────────────┐
│    Usuário      │──1:1──│     Endereço        │
└─────────────────┘       └─────────────────────┘
        │
        ├──1:1────────────┐
        │                 │
        │       ┌─────────────────────────┐
        │       │  Contato de Emergência  │
        │       └─────────────────────────┘
        │
        └──1:N────────────┐
                          │
                ┌─────────────────────┐
                │    Seguro de Vida   │
                └─────────────────────┘
```

---

## 🧪 Testando com Insomnia/Postman

1. Importe o arquivo `insomnia_tests.json` no Insomnia
2. Os endpoints já estarão configurados e prontos para uso
3. A URL base está configurada como `http://localhost:4000`

**Passo a passo:**

- Abra o Insomnia ou Postman
- Clique em "Create" → "Import"
- Selecione o arquivo `insomnia_tests.json`
- Todos os endpoints estarão disponíveis

---

## 🧪 Executar Testes

```bash
# testes unitários
$ npm run test

# testes e2e
$ npm run test:e2e

# cobertura de testes
$ npm run test:cov
```

---

## 📚 Tecnologias Utilizadas

| Tecnologia      | Versão | Descrição                                    |
| --------------- | ------ | -------------------------------------------- |
| NestJS          | 10.x   | Framework Node.js para aplicações escaláveis |
| TypeORM         | 0.3.x  | ORM para TypeScript                          |
| MySQL           | 8.x    | Banco de dados relacional                    |
| TypeScript      | 5.x    | Superset JavaScript com tipagem              |
| class-validator | 0.14.x | Validação de DTOs                            |

---

## 📄 Licença

Este projeto está sob a licença MIT.
