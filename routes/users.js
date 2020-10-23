/**
 * @module
 * @description Роутер users. Обрабатывает запросы:<br>
 *  - GET /users - возвращает данных всех пользователей<br>
 *  - GET /users/id - возвращает данные конкретного пользователя по его _id<br>
 *  - POST /users - добавляет нового пользователя
 * @since v.1.0.0
 */

const router = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users.js');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);

module.exports = router;
