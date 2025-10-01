# Cypress API Testing Framework

[![CI/CD Pipeline](https://github.com/GleissonSantos/cypress-api-ciandt/actions/workflows/pipeline-actions.yml/badge.svg)](https://github.com/GleissonSantos/cypress-api-ciandt/actions)
[![Cypress](https://img.shields.io/badge/cypress-15.3.0-green.svg)](https://cypress.io/)
[![Node.js](https://img.shields.io/badge/node.js-20+-blue.svg)](https://nodejs.org/)

## 📋 Descrição
Framework de testes automatizados para APIs REST utilizando **Cypress**, o projeto é focado em testes de **Usuários**, **Autenticação** e **Produtos** da API [ServeRest](https://serverest.dev).

## 🏗️ Arquitetura e Padrões Implementados

### ✅ **Builder Pattern**
- **UserBuilder** - Construção flexível de dados de usuário
- **ProductBuilder** - Geração de produtos com diferentes características  
- **LoginBuilder** - Criação de credenciais válidas e inválidas

### ✅ **Command Pattern**
- **Custom Commands** - Comandos reutilizáveis para operações comuns
- **Encapsulamento** - Lógica de API abstraída em comandos específicos

### ✅ **Clean Code**
- **Separação de responsabilidades** - Builders, Commands e Tests organizados
- **Nomenclatura descritiva** - Código autodocumentado
- **Reutilização** - Componentes modulares e flexíveis

## 🚀 Tecnologias e Ferramentas

| Ferramenta | Versão | Propósito |
|------------|---------|-----------|
| **Cypress** | 15.3.0 | Framework de testes E2E/API |
| **Faker.js** | 10.0.0 | Geração de dados realísticos |
| **JavaScript** | ES6+ | Linguagem de programação |
| **GitHub Actions** | - | CI/CD Pipeline |
| **Node.js** | 20+ | Runtime JavaScript |

## 📁 Estrutura do Projeto

```
cypress-api_ciandt/
├── .github/
│   └── workflows/
│       └── pipeline-actions.yml    # CI/CD Configuration
├── cypress/
│   ├── e2e/api/
│   │   ├── Login.cy.js            # 2 testes - Auth scenarios
│   │   ├── Product.cy.js          # 1 teste - Product management  
│   │   └── Users.cy.js            # 3 testes - User CRUD
│   ├── support/
│   │   ├── builders/
│   │   │   ├── user.builder.js    # Builder para dados de usuário
│   │   │   ├── product.builder.js # Builder para dados de produto
│   │   │   └── login.builder.js   # Builder para credenciais
│   │   ├── commands.js            # Custom Cypress commands
│   │   └── e2e.js                # Configurações globais
│   └── fixtures/
├── cypress.config.js              # Configuração do Cypress
├── package.json                   # Dependencies & scripts
└── README.md                     # Documentação
```

## 🛠️ Configuração e Execução

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clonar repositório
git clone https://github.com/GleissonSantos/cypress-api-ciandt.git
cd cypress-api-ciandt

# Instalar dependências
npm install

# Verificar instalação
npx cypress verify
```

### **Execução dos Testes**
```bash
# Executar todos os testes (headless)
npx cypress run

# Executar testes específicos
npx cypress run --spec "cypress/e2e/api/Users.cy.js"

# Abrir interface gráfica
npx cypress open

# Executar com browser específico
npx cypress run --browser chrome
```

## 🧪 Cenários de Teste Implementados

### 👥 **Usuários (Users.cy.js)** - 3 Testes
- ✅ **Cadastro de usuário** - Criação com dados válidos
- ✅ **Email duplicado** - Validação de regra de negócio
- ✅ **Busca por ID** - Recuperação e validação de dados

### 🔐 **Login (Login.cy.js)** - 2 Testes  
- ✅ **Login válido** - Autenticação com credenciais corretas
- ✅ **Login inválido** - Tentativa com credenciais incorretas

### 🛍️ **Produtos (Product.cy.js)** - 1 Teste
- ✅ **Cadastro de produto** - Criação com autenticação obrigatória


## 🤖 CI/CD Pipeline

O projeto utiliza **GitHub Actions** para automação:

- ✅ **Trigger**: Push/PR para branch `main`
- ✅ **Environment**: Ubuntu Latest + Node.js 20
- ✅ **Steps**: Checkout → Install → Test → Report
- ✅ **Cache**: Dependências npm otimizadas

## 📊 Relatórios e Métricas

### **Cobertura Atual**
- **Total de testes**: 8 testes
- **Taxa de sucesso**: 100% ✅
- **Tempo médio**: ~3 segundos
- **APIs testadas**: 3 endpoints principais

### **Validações Implementadas**
- ✅ Status codes (200, 201, 400, 401)
- ✅ Response body structure
- ✅ Business rules validation  
- ✅ Data type verification

## 🔄 Roadmap e Melhorias Futuras

### **Próximas Implementações**
- [ ] **Page Object Model** - Organização de requisições API
- [ ] **Relatórios HTML** - Dashboard de resultados

## 👨‍💻 Autor

**Gleisson Santos**  
🐙 GitHub: [@GleissonSantos](https://github.com/GleissonSantos)

---
