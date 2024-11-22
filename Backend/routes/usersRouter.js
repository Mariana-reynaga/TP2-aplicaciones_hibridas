const express = require('express');
const router = express.Router();
router.use(express.json());

const validateToken = require('../middleware/auth');

const { bringUsers, getUserXname, getUserXid, createUser, updateUser, deleteUser, login } = require('../controllers/UserController');

// Rutas
router.get('/', bringUsers);

router.get('/name/:name', getUserXname);

router.get('/:id', getUserXid);

router.post('/', createUser);

router.put('/:id',validateToken , updateUser);

router.delete('/:id',validateToken, deleteUser); 

router.post('/login', login); 

module.exports = router;