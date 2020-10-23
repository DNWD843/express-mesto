const Card = require('../models/card');

/**
 * @module
 * @description Контроллеры модели card.<br>Обрабатывают запросы на получение всех карточек,
 *  добавление новой карточки, удаление карточки по ее идентификатору
 * @since v.1.0.0
 */

/**
 * @description Контроллер<br>Получает данные всех карточек и отправляет их пользователю.
 * @param {object} req - объект запроса
 * @param {object} res - объект ответа
 * @returns {JSON}
 * @since v.1.0.0
 * @public
 */
const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ message: 'Данные не найдены' });
      }
      return res.status(500).send({ message: 'Ошибка чтения данных' });
    });
};

/**
 * @description Контроллер<br>Создаёт новую карточку и возвращает её пользователю.<br>
 * Принимает параметры из тела запроса: { name, link }
 * @param {object} req - объект запроса
 * @param {object} res - объект ответа
 * @param {String} req.body.name - название карточки
 * @param {String} req.body.link - ссылка на изображение карточки
 * @returns {JSON}
 * @since v.1.1.0
 * @public
 */
const createCard = (req, res) => {
  const { name, link } = req.body;
  // req.user._id - временное решение авторизции.
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch(() => {
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};

/**
 * @description Контроллер<br>Удаляет карточку по её идентификатору, возвращает сообщение об
 *  успешном удалении и удаленную карточку.<br>
 * Принимает _id удаляемой карточки из параметров запроса
 * @param {object} req - объект запроса
 * @param {object} res - объект ответа
 * @param {String} req.params.cardId - _id удаляемой карточки, передается в параметрах запроса
 * @returns {JSON}
 * @since v.1.1.0
 * @public
 */
const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((deletedCard) => {
      res.status(200).send({ message: 'Карточка успешно удалена', deletedCard });
    })
    .catch(() => {
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
