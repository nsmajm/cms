const express = require('express');
const loginController = require('@controllers/auth/LoginController');
const router = require('express-promise-router')();

router.get('/login', loginController.login);
module.exports = router;