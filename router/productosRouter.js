const express = require('express');
const productosController = require('../controller/productosController');
const router = express.Router();

router.get('/', productosController.productos);

module.exports = router;