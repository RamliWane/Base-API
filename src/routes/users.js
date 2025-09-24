const express = require('express');

const getUsersController = require('../controller/users');

const router = express.Router();

router.get('/', getUsersController.getAllUsers);

router.post('/', getUsersController.createUser);

module.exports = router;