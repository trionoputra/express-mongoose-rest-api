# Express Mongoose REST API

Starter project for a REST API with Node.js, Express &amp; MongoDB 

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node 10.15.2, npm 6.4.1
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

## Dependencies
- [bcryptjs : ^2.4.3](https://github.com/dcodeIO/bcrypt.js)
- [body-parser : ^1.18.3](https://github.com/dcodeIO/bcrypt.js)
- [cookie-parser : ~1.4.3](https://github.com/expressjs/body-parser)
- [debug : ~2.6.9](https://github.com/visionmedia/debug)
- [express : ~4.16.0](https://expressjs.com)
- [http-errors : ~1.6.2](https://github.com/jshttp/http-errors)
- [moment : ^2.24.0](https://momentjs.com)
- [mongoose : ^5.4.10](https://mongoosejs.com)
- [mongoose-unique-validator : ^2.0.2](https://github.com/blakehaswell/mongoose-unique-validator)
- [morgan : ~1.9.0](https://github.com/expressjs/morgan)

## Installation
* `git clone https://github.com/trionoputra/express-mongoose-rest-api.git`
* `cd express-mongoose-rest-api`
* `npm install`
* `npm start`

## Routes
### GET `http://localhost:3000/user`

Get all users.

+ Method: `GET`
+ URL: `http://localhost:3000/user`

### POST `http://localhost:3000/user`

Create a new item.

+ Method: `POST`
+ URL: `http://localhost:3000/user`
+ Body:

```js
{
  "id": "1",
  "name": "Trionoputra"
  "password": "123456"
}
```

### GET `http://localhost:3000/user/:userId`

Get item with specific id.

+ Method: `GET`
+ URL: `http://localhost:3000/user/1`

### PUT `http://localhost:3000/user/:userId`

Update entire item with specific id.

+ Method: `PUT`
+ URL: `http://localhost:3000/user/1`
+ Body:

```js
{
  "name": "Triono putra"
  "password": "1234567890"
}
```

### DELETE `http://localhost:3000/user/:userId`

Delete item with specific id.

+ Method: `DELETE`
+ URL: `http://localhost:3000/user/1`
