# 📝 Express Blog API — RESTful Blog Backend dengan Express, TypeScript & Prisma

## 🚀 Deskripsi

**Express Blog API** adalah REST & GraphQL API untuk aplikasi blog yang dibangun menggunakan **Node.js, Express, dan TypeScript**.  
Project ini dirancang sebagai **backend service** yang mendukung autentikasi pengguna, manajemen artikel, komentar, serta fitur like dengan pendekatan yang **scalable, terstruktur, dan testable**.

Project ini juga menjadi potofolio untuk menunjukkan penerapan:

-   Clean Architecture (Controller, Service, Repository)
-   Authentication & Authorization menggunakan JWT
-   ORM database dengan Prisma
-   API testing menggunakan Jest & Supertest
-   Caching menggunakan Redis
-   Integrasi GraphQL di dalam aplikasi Express

---

## ✨ Features

## ✨ Features

-   **Authentication**
    -   → Register & Login user dengan JWT-based authentication
-   **Article Management**
    -   → CRUD artikel (Create, Read, Update, Delete)
-   **Comment System**
    -   → Create, Read, dan Delete komentar pada artikel
-   **Like System**
    -   → Toggle like / unlike pada artikel
-   **API Architecture**
    -   → REST API & GraphQL API berjalan berdampingan, validasi request menggunakan Zod
-   **Performance**
    -   → Redis caching untuk data tertentu
-   **Testing**
    -   → Unit & integration testing menggunakan Jest & Supertest

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

## ⚡ Quickstart (Instalasi — Setup — Running)

Ikuti langkah berikut untuk menjalankan project secara lokal:

### 1. Clone repository

```bash
git clone https://github.com/dimasawp/express-blog-api.git
cd express-blog-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment

Buat file .env dengan menyalin .env.example dan sesuaikan variabelnya:

```bash
cp .env.example .env
```

Atur variabel seperti DATABASE_URL dll.

### 4. Setup database

Pakai Prisma:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Running development

```bash
npm run dev
```

Server akan berjalan di http://localhost:3000 (atau sesuai konfigurasi).

## 🧪 Testing

Jalankan unit / integration test dengan perintah:

```bash
npm test
```

Testing yang Dicakup

-   Authentication API
-   Article API
-   Comment API
-   Like API
-   Validasi request & response

<!-- Pastikan database test sudah terkonfigurasi di .env.test (kalau ada). -->

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

Struktur ini membantu modularisasi kode dan mempermudah scaling. Setiap module memiliki:

-   controller → handle HTTP request
-   service → business logic
-   repo → akses database (Prisma)
-   schema → validasi request (Zod)
-   routes → routing Express

## 🎯 Tujuan Projek

Tujuan utama dibuatnya proyek ini:

-   💡 Sebagai referensi belajar membangun RESTful API menggunakan Node.js, Express & TypeScript.
-   🚀 Template backend blog yang siap dikembangkan menjadi aplikasi lengkap.
-   🛠 Contoh penggunaan Prisma ORM dalam struktur proyek TypeScript.
-   🧪 Contoh setup testing end-to-end menggunakan Jest.

## 🗺 Planning Project

-   Implementasi Docker & Docker Compose
-   Implementasi GitHub Actions (CI/CD)
