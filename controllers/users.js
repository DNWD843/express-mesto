const User = require('../models/user');

/**
 * @module
 * @description Контроллеры модели user.<br>
 * Обрабатывают запросы на получение списка пользователей, получение конкретного
 *  пользователя по его _id, добавление нового пользователя.
 * @since v.1.0.0
 */

/**
 * @description Контроллер<br>Получает данные всех пользователей, в ответ
 *  отправляет все полученные данные запрашивающему пользователю
 * @param {Object} req - объект запроса
 * @param {Object} res - объект ответа
 * @returns {JSON}
 * @since v.1.0.0
 * @public
 */
const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ message: 'Данные не найдены' });
      }
      return res.status(500).send({ message: 'Ошибка чтения данных' });
    });
};

/**
 * @description Контроллер<br>Получает данные конкретного пользователя по его идентификатору,
 *  в ответ отправляет полученные данные запрашивающему пользователю.<br>
 * Принимает идентификатор _id в параметрах запроса.
 * @param {Object} req - объект запроса
 * @param {Object} res - объект ответа
 * @param {String} req.params.userId - _id искомого пользователя
 * @returns {JSON}
 * @since v.1.0.0
 * @public
 */
const getUserById = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ message: 'Данные не найдены' });
      }
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};

/**
 * @description Контроллер<br>Создает нового пользователя, в ответ отправляет данные созданного
 *  пользователя<br>Принимает параметры из тела запроса: { name, about, avatar }
 * @param {Object} req - объект запроса
 * @param {Object} res - объект ответа
 * @param {String} req.body.name - имя нового пользователя
 * @param {String} req.body.about - информация о новом пользователе
 * @param {String} req.body.avatar - ссылка на аватар нового пользователя
 * @returns {JSON}
 * @since v.1.1.0
 * @public
 */
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch(() => {
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
