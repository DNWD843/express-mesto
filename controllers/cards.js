const path = require('path');
const readFile = require('../utils/read-file.js');

const jsonCardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');

/**
 * @module
 * @description Контроллер.<br>Получает данные карточек
 * @since v.1.0.0
 * @memberof controllers
 */

/**
 * @description Миддлвэр, получает данные карточек и отправляет их пользователю.
 * @param {object} req - объект запроса
 * @param {object} res - объект ответа
 * @returns {JSON}
 * @since v.1.0.0
 * @public
 */
const getCards = (req, res) => {
  readFile(jsonCardsDataPath)
    .then((cardsData) => res.send(cardsData))
    .catch((err) => res.send(err));
};

module.exports = {
  getCards,
};
