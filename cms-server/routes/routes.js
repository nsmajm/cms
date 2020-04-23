const express = require('express');
const loginController = require('../app/controllers/auth/LoginController');
const RegisterController = require('../app/controllers/auth/RegisterController');
const router = require('express-promise-router')();

router.post('/login', loginController.login);
router.post('/register', RegisterController.register);

module.exports = router;