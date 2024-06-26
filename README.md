# Adding Authentication to Your Prisma-Integrated Express Application
Secure your Express app with rock-solid authentication! Learn to use password hashing and JWTs for user authentication.

# Installation
You can follow this tutorial and understand how this project work on this medium [link](https://medium.com/@csalazar94/adding-authentication-to-your-prisma-integrated-express-application-d92eaa200c5f).

```
npm install
```

# Usage
```
npm start
```

# API Endpoints
### POST /users
Create a new user.

#### Request Body
```
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Response Body
```
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

## GET /users
Get a list of all users.

### Response Body
```
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com"
  }
]
```

## GET /users/:id
Get one user by id.

### Response Body
```
{
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
}
```
