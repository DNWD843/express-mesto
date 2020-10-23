/**
 * @module
 * @description Роутер cards. Обрабатывает запросы:<br>
 * GET /cards - возвращает все карточки<br>
 * POST /cards - создаёт новую карточку<br>
 * DELETE /cards/:cardId - удаляет карточку по идентификатору
 * @since v.1.0.0
 */

const router = require('express').Router();
const { getCards, createCard, deleteCard } = require('../controllers/cards.js');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);

module.exports = router;
