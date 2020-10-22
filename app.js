const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rootRouter = require('./routes/root');

const { PORT = 3000 } = process.env;

/**
 * @module app
 * @description Точка входа бэкенда, express-сервер.
 * @since v.1.0.0
 */
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Временно захардкорили _id автора карточки. Исправим в спринте 14.
 * @ignore
 */
app.use((req, res, next) => {
  req.user = {
    _id: '5f91f79e13f7152548e0c14e',
  };
  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(rootRouter);

app.listen(PORT);
