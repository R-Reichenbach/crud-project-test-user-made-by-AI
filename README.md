# User CRUD API

A complete User management CRUD API built with **TypeScript**, **Node.js**, and **Express**.

## Features

✅ Full CRUD operations (Create, Read, Update, Delete)  
✅ User validation  
✅ Email uniqueness enforcement  
✅ RESTful API endpoints  
✅ TypeScript for type safety  
✅ In-memory database with Map structure  
✅ Error handling  
✅ CORS enabled  

## Installation

```bash
npm install
```

## Setup

Create a `.env` file in the root directory (copy from `.env.example`):

```env
PORT=3000
NODE_ENV=development
```

## Running the Project

### Development mode (with hot reload)
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production mode
```bash
npm start
```

## API Endpoints

### Create User
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

**Response (201):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "createdAt": "2026-02-25T10:00:00.000Z",
  "updatedAt": "2026-02-25T10:00:00.000Z"
}
```

### Get All Users
```http
GET /api/users
```

**Response (200):**
```json
{
  "count": 1,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30,
      "createdAt": "2026-02-25T10:00:00.000Z",
      "updatedAt": "2026-02-25T10:00:00.000Z"
    }
  ]
}
```

### Get User by ID
```http
GET /api/users/{id}
```

**Response (200):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "createdAt": "2026-02-25T10:00:00.000Z",
  "updatedAt": "2026-02-25T10:00:00.000Z"
}
```

### Update User
```http
PUT /api/users/{id}
Content-Type: application/json

{
  "name": "Jane Doe",
  "age": 31
}
```

**Response (200):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Jane Doe",
  "email": "john@example.com",
  "age": 31,
  "createdAt": "2026-02-25T10:00:00.000Z",
  "updatedAt": "2026-02-25T10:00:01.000Z"
}
```

### Delete User
```http
DELETE /api/users/{id}
```

**Response (200):**
```json
{
  "message": "User deleted successfully",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Jane Doe",
    "email": "john@example.com",
    "age": 31,
    "createdAt": "2026-02-25T10:00:00.000Z",
    "updatedAt": "2026-02-25T10:00:01.000Z"
  }
}
```

### Health Check
```http
GET /health
```

## Project Structure

```
src/
├── index.ts                 # Main application entry point
├── models/
│   └── User.ts             # User model definition
├── database/
│   └── UserDatabase.ts      # In-memory database operations
└── routes/
    └── userRoutes.ts       # API route handlers
```

## Error Handling

- **400**: Missing required fields
- **404**: User not found
- **409**: Email already exists
- **500**: Internal server error

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **UUID** - Unique ID generation
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables management

## Future Enhancements

- [ ] Database integration (PostgreSQL, MongoDB)
- [ ] Authentication & Authorization
- [ ] Input validation with Joi or Zod
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Logging system
- [ ] Rate limiting
- [ ] Pagination

## License

MIT

## Author

R-Reichenbach