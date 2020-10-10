const path = require('path');
const readFile = require('../utils/read-file.js');

const jsonUsersDataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readFile(jsonUsersDataPath)
    .then((data) => res.send(data.users))
    .catch((err) => res.send(err));
};

const getUserById = (req, res) => {
  const { id } = req.params;
  readFile(jsonUsersDataPath)
    .then((data) => {
      const userById = data.users.find((user) => user._id === id);
      return userById;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => res.send(err));
};

module.exports = {
  getUsers,
  getUserById,
};
