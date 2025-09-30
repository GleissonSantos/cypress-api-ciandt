# Cypress API Testing Framework

## 📋 Descrição
Framework de testes automatizados para APIs utilizando Cypress, focado em testes de **Usuários**, **Login** e **Produtos**.

## 🚀 Tecnologias Utilizadas
- **Cypress** - Framework de testes E2E
- **Faker.js** - Geração de dados fictícios
- **JavaScript ES6+** - Linguagem de programação

## 📁 Estrutura do Projeto
```
cypress-API/
├── cypress/
│   ├── e2e/
│   │   └── api/
│   │       ├── Login.cy.js
│   │       ├── Product.cy.js
│   │       └── Users.cy.js
│   ├── support/
│   │   ├── api/
│   │   ├── builders/
│   │   ├── commands.js
│   │   └── e2e.js
│   └── fixtures/
├── cypress.config.js
├── package.json
└── README.md
```

## 🛠️ Instalação
```bash
# Instalar dependências
npm install

# Executar testes
npx cypress run

# Abrir interface gráfica
npx cypress open
```

## 🧪 Cenários de Teste
- ✅ **Usuários**: Cadastro, busca por ID, cenários negativos
- ✅ **Login**: Autenticação válida e inválida
- ✅ **Produtos**: CRUD completo com autenticação

## 🔄 Status
Versão inicial do framework - **Em desenvolvimento**

Próximas implementações:
- Refatoração com API Objects
- Implementação de Builder Pattern
- Melhoria na organização dos testes