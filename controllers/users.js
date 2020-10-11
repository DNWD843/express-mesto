const path = require('path');
const readFile = require('../utils/read-file.js');

const jsonUsersDataPath = path.join(__dirname, '..', 'data', 'users.json');

/**
 * @module
 * @description Контроллер.<br>Получает данные пользователей
 * @since v.1.0.0
 * @memberof controllers
 */

/**
 * @description Миддлвэр, получает данные всех пользователей и отправляет их пользователю.
 * @param {object} req - объект запроса
 * @param {object} res - объект ответа
 * @returns {JSON}
 * @since v.1.0.0
 * @public
 */
const getUsers = (req, res) => {
  readFile(jsonUsersDataPath)
    .then((usersData) => res.send(usersData))
    .catch((err) => res.send(err));
};

/**
 * @description Миддлвэр, получает данные конкретного пользователя по его id
 *  и отправляет их пользователю.
 * @param {object} req - объект запроса
 * @param {object} res - объект ответа
 * @returns {JSON}
 * @since v.1.0.0
 * @public
 */
const getUserById = (req, res) => {
  const { id } = req.params;
  readFile(jsonUsersDataPath)
    .then((usersData) => {
      const userById = usersData.find((user) => user._id === id);
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
