require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const rootRouter = require('./routes/root');
const handleErrors = require('./middlewares/handleErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

/**
 * @module app
 * @description Точка входа бэкенда, express-сервер.
 * @since v.1.0.0
 */
const app = express();

const corsOptions = {
  origin: 'https://linuxoid.students.nomoreparties.xyz',
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(rootRouter);
app.use(errorLogger);
app.use(errors());
app.use(handleErrors);

const toDataBase = 'mongodb://localhost:27017/mestodb';
mongoose
  .connect(toDataBase, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.error(`Can't start app ${err.toString()}`);
  });
