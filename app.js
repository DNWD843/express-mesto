const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRoutes);
app.use('/cards', cardsRouter);
app.use('*', (req, res) => res.send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT);
