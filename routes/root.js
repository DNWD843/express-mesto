/**
 * @module
 * @description Корневой роутер. Обрабатывает все пути запросов
 * @since v.1.0.2
 * @memberof routes
 */

const express = require('express');
const router = require('express').Router();
const path = require('path');
const usersRoutes = require('./users.js');
const cardsRouter = require('./cards.js');
const wrongRequestRouter = require('./wrongRequest.js');

router.use(express.static(path.join(__dirname, '..', '/public')));
router.use('/users', usersRoutes);
router.use('/cards', cardsRouter);
router.use('*', wrongRequestRouter);

module.exports = router;
