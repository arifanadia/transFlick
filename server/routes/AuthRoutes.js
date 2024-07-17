const express = require('express');
const { register, login } = require('../Controllers/AuthControllers');

const authRoutes = express.Router();

authRoutes.post("/signup", register);
authRoutes.post("/login", login);

module.exports = { authRoutes };
