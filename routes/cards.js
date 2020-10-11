/**
 * @module
 * @description Роутер. Обрабатывает пути запросов  /cards
 * @since v.1.0.0
 * @memberof routes
 */

const router = require('express').Router();
const { getCards } = require('../controllers/cards.js');

router.get('/', getCards);

module.exports = router;
