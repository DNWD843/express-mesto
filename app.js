const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/users.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRoutes);

app.listen(PORT);
