# 📝 Express Blog API — RESTful Blog Backend dengan Express, TypeScript & Prisma

## 🚀 Description

**Express Blog API** is a REST & GraphQL API for a blog application built using **Node.js, Express, and TypeScript**.  
This project is designed as a **backend service** that supports user authentication, article management, comments, and likes, following a **scalable, well-structured, and testable** approach.

This project also serves as a portfolio to demonstrate the implementation of:

-   Clean Architecture (Controller, Service, Repository)
-   Authentication & Authorization using JWT
-   Database ORM with Prisma
-   API testing using Jest & Supertest
-   Caching with Redis
-   GraphQL integration within an Express application

---

## ✨ Features

-   **Authentication**
    -   → Register & login users with JWT-based authenticatio
-   **Article Management**
    -   → CRUD articles (Create, Read, Update, Delete)
-   **Comment System**
    -   → Create, read, and delete comments on articles
-   **Like System**
    -   → Toggle like / unlike on articles
-   **API Architecture**
    -   → REST & GraphQL APIs running side by side with request validation using Zod
-   **Performance**
    -   → Redis caching for selected data
-   **Testing**
    -   → Unit & integration testing using Jest & Supertest

---

## 🛠 Tech Stack

-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **Language**: TypeScript
-   **Database**: PostgreSQL
-   **ORM**: Prisma
-   **Authentication**: JWT (JSON Web Token)
-   **Caching**: Redis
-   **API Style**: REST & GraphQL
-   **Testing**: Jest & Supertest
-   **Validation**: Zod

---

## ⚡ Quickstart

### 1. Clone repository

```bash
git clone https://github.com/dimasawp/express-blog-api.git
cd express-blog-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

```bash
cp .env.example .env
```

Configure variables such as `DATABASE_URL`, `JWT_SECRET`, `REDIS_URL`, etc.

### 4. Database Setup

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run in development mode

```bash
npm run dev
```

---

## 🧪 Testing

Run unit and integration tests using:

```bash
npm test
```

Covered test cases

-   Authentication API
-   Article API
-   Comment API
-   Like API
-   Request & response validation

Make sure the test database is properly configured (e.g. using .env.test if available).

---

## 📁 Struktur Projek

Contoh struktur folder (intinya):

```bash
.
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── common/
│   │   ├── errors/
│   │   ├── handlers/
│   │   └── middlewares/
│   ├── config/
│   │   ├── env.ts
│   │   ├── logger.ts
│   │   ├── prisma.ts
│   │   └── redis.ts
│   ├── graphql/
│   │   ├── schema.ts
│   │   └── resolver.ts
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.repo.ts
│   │   │   ├── auth.schema.ts
│   │   │   └── auth.routes.ts
│   │   ├── article/
│   │   ├── comment/
│   │   └── like/
│   └── utils/
│       ├── jwt.ts
│       ├── cache.ts
│       ├── password.ts
│       ├── response.ts
│       └── validate.ts
├── tests/
│   ├── auth.test.ts
│   ├── article.test.ts
│   ├── comment.test.ts
│   ├── like.test.ts
│   └── helpers/
└── tsconfig.json
```

This structure promotes modularity and scalability. Each module consists of:

-   controller → handles HTTP requests
-   service → contains business logic
-   repo → database access layer (Prisma)
-   schema → request validation (Zod)
-   routes → Express routing

---

## 🎯 Project Goals

-   Learning reference for RESTful API with Express & TypeScript
-   Backend blog template
-   Prisma ORM example
-   API testing example with Jest

---

## 🗺 Project Planning

-   Docker & Docker Compose
-   GitHub Actions (CI/CD)
