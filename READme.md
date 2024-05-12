### Handling Audit logging on Node js

#### Prequisites

- Basic knowledge working with [Node.js](https://nodejs.org/).
- Basic knowledge working with [Express.js](https://expressjs.com/).
- [Postman](https://www.postman.com/downloads/) installed on your computer.
- [MongoDB](https://www.mongodb.com/) and [MongoDB Compass](https://www.mongodb.com/products/tools/compass) installed on your computer.

#### Step by step

Install the dependencies:

```bash
npm install
```

Run the application:

```bash
npm run start
```

Send a *GET* request to *http://localhost:4000*.

Send a *POST* request to *http://localhost:4000*. Make sure you include some *JSON* payload.

Send a *PUT* request to *http://localhost:4000/kitty*: Include some *JSON* payload too.

Confirm the data has been logged on your MongoDB database.