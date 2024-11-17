const express = require('express');
const router = express.Router();
router.use(express.json());

const { getXid,elimXid } = require('../controllers/SearchAll');

// Rutas
router.get('/:id', getXid);

router.delete('/:id', elimXid);

module.exports = router;