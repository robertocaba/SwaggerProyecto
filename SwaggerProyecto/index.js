const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const { MONGO_URI } = require("./config/keys");
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');

app.use(express.json());
app.use('/users',require('./routes/users'));
app.use('/posts',require('./routes/posts'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))


mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("conectado a mongoDB con éxito"))
  .catch((err) => console.error(err));

app.listen(PORT, console.log(`Server started on port ${PORT}`));