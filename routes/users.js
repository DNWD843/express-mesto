const router = require('express').Router();
const { getUsers, getUserById } = require('../controllers/users.js');

router.get('/', getUsers);
router.get('/:id', getUserById);

module.exports = router;
