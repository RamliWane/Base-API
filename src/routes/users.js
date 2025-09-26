const express = require('express');

const getUsersController = require('../controller/users');

const router = express.Router();

// Create POST
router.post('/', getUsersController.createUser);


// Read GET
router.get('/', getUsersController.getAllUsers);

// Update PATCH
router.patch('/:id', getUsersController.UpdateUser);

// Update DELETE
router.delete('/:id', getUsersController.DeleteUser);

module.exports = router;