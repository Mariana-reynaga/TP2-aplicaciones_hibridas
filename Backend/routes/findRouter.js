const express = require('express');
const router = express.Router();
router.use(express.json());

const { getXid } = require('../controllers/SearchAll');

// Rutas
router.get('/:id', getXid);

module.exports = router;