const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');
const wrongRequestRouter = require('./routes/wrongRequest.js');

const { PORT = 3000 } = process.env;

/**
 * @module app
 * @description Точка входа бэкенда, express-сервер.
 * @since v.1.0.0
 */
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRoutes);
app.use('/cards', cardsRouter);
app.use('/', wrongRequestRouter);

app.listen(PORT);
