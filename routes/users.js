/**
 * @module
 * @description Роутер. Обрабатывает пути запросов /users и /users/id
 * @since v.1.0.0
 * @memberof routes
 */

const router = require('express').Router();
const { getUsers, getUserById } = require('../controllers/users.js');

router.get('/', getUsers);
router.get('/:id', getUserById);

module.exports = router;
