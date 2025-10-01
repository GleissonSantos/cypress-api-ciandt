# Cypress API Testing Framework

[![CI/CD Pipeline](https://github.com/GleissonSantos/cypress-api-ciandt/actions/workflows/pipeline-actions.yml/badge.svg)](https://github.com/GleissonSantos/cypress-api-ciandt/actions)
[![Cypress](https://img.shields.io/badge/cypress-15.3.0-green.svg)](https://cypress.io/)
[![Node.js](https://img.shields.io/badge/node.js-20+-blue.svg)](https://nodejs.org/)

## 📋 Description
Automated testing framework for REST APIs using **Cypress**, the project focuses on testing **Users**, **Authentication** and **Products** from the [ServeRest](https://serverest.dev) API.

## 🏗️ Architecture and Implemented Patterns

### ✅ **Builder Pattern**
- **UserBuilder** - Flexible construction of user data
- **ProductBuilder** - Generation of products with different characteristics  
- **LoginBuilder** - Creation of valid and invalid credentials

### ✅ **Command Pattern**
- **Custom Commands** - Reusable commands for common operations
- **Encapsulation** - API logic abstracted into specific commands

### ✅ **Clean Code**
- **Separation of concerns** - Builders, Commands and Tests organized
- **Descriptive naming** - Self-documented code
- **Reusability** - Modular and flexible components

## 🚀 Technologies and Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **Cypress** | 15.3.0 | E2E/API testing framework |
| **Faker.js** | 10.0.0 | Realistic data generation |
| **JavaScript** | ES6+ | Programming language |
| **GitHub Actions** | - | CI/CD Pipeline |
| **Node.js** | 20+ | JavaScript runtime |

## 📁 Project Structure

```
cypress-api_ciandt/
├── .github/
│   └── workflows/
│       └── pipeline-actions.yml    # CI/CD Configuration
├── cypress/
│   ├── e2e/api/
│   │   ├── Login.cy.js            # 2 tests - Auth scenarios
│   │   ├── Product.cy.js          # 1 test - Product management  
│   │   └── Users.cy.js            # 3 tests - User CRUD
│   ├── support/
│   │   ├── builders/
│   │   │   ├── user.builder.js    # Builder for user data
│   │   │   ├── product.builder.js # Builder for product data
│   │   │   └── login.builder.js   # Builder for credentials
│   │   ├── commands.js            # Custom Cypress commands
│   │   └── e2e.js                # Global configurations
│   └── fixtures/
├── cypress.config.js              # Cypress configuration
├── package.json                   # Dependencies & scripts
└── README.md                     # Documentation
```

## 🛠️ Setup and Execution

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone repository
git clone https://github.com/GleissonSantos/cypress-api-ciandt.git
cd cypress-api-ciandt

# Install dependencies
npm install

# Verify installation
npx cypress verify
```

### **Running Tests**
```bash
# Run all tests (headless)
npx cypress run

# Run specific tests
npx cypress run --spec "cypress/e2e/api/Users.cy.js"

# Open graphical interface
npx cypress open

# Run with specific browser
npx cypress run --browser chrome
```

## 🧪 Implemented Test Scenarios

### 👥 **Users (Users.cy.js)** - 3 Tests
- ✅ **User registration** - Creation with valid data
- ✅ **Duplicate email** - Business rule validation
- ✅ **Search by ID** - Data retrieval and validation

### 🔐 **Login (Login.cy.js)** - 2 Tests  
- ✅ **Valid login** - Authentication with correct credentials
- ✅ **Invalid login** - Attempt with incorrect credentials

### 🛍️ **Products (Product.cy.js)** - 1 Test
- ✅ **Product registration** - Creation with required authentication


## 🤖 CI/CD Pipeline

The project uses **GitHub Actions** for automation:

- ✅ **Trigger**: Push/PR to `main` branch
- ✅ **Environment**: Ubuntu Latest + Node.js 20
- ✅ **Steps**: Checkout → Install → Test → Report
- ✅ **Cache**: Optimized npm dependencies

## 📊 Reports and Metrics

### **Current Coverage**
- **Total tests**: 8 tests
- **Success rate**: 100% ✅
- **Average time**: ~3 seconds
- **Tested APIs**: 3 main endpoints

### **Implemented Validations**
- ✅ Status codes (200, 201, 400, 401)
- ✅ Response body structure
- ✅ Business rules validation  
- ✅ Data type verification

## 🔄 Roadmap and Future Improvements

### **Next Implementations**
- [ ] **Page Object Model** - API request organization
- [ ] **HTML Reports** - Results dashboard

## 👨‍💻 Author

**Gleisson Santos**  
🐙 GitHub: [@GleissonSantos](https://github.com/GleissonSantos)

---
