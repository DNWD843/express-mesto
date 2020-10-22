/**
 * @module
 * @description Роутер users. Обрабатывает запросы:<br>
 *  - GET /users<br>
 *  - GET /users/id<br>
 *  - POST /users
 * @since v.1.0.0
 * @memberof routes
 */

const router = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users.js');

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);

module.exports = router;
