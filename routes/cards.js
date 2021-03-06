const router = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards.js');

const {
  getCardsReqValidator,
  createCardReqValidator,
  deleteCardReqValidator,
  likeCardReqValidator,
  dislikeCardReqValidator,
} = require('../middlewares/cardsValidators');

router.get('/', getCardsReqValidator, getCards);
router.post('/', createCardReqValidator, createCard);
router.delete('/:cardId', deleteCardReqValidator, deleteCard);
router.put('/:cardId/likes', likeCardReqValidator, likeCard);
router.delete('/:cardId/likes', dislikeCardReqValidator, dislikeCard);

module.exports = router;
