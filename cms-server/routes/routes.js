const express = require('express');
const router = require('express-promise-router')();
const loginController = require('../app/controllers/auth/LoginController');
const RegisterController = require('../app/controllers/auth/RegisterController');
const {verifyToken} = require('../app/middleware/auth');


router.post('/login', loginController.login);
router.post('/register', RegisterController.register);
router.post('/me',verifyToken, loginController.me);

module.exports = router;