const express = require('express');
const router = express.Router();
router.use(express.json());

const validateToken = require('../middleware/auth');

const { 
        getRecognizedBreeds, 
        getBreedXid, 
        getBreedXlength, 
        getBreedXcolor, 
        getBreedXname, 
        createRecognized, 
        updateRecognizedBreed, 
        deleteRecognizedBreed,
        randomBreed,
        threeRandomBreed 
    } = require('../controllers/RecognizedController');

// Rutas
router.get('/', getRecognizedBreeds);

router.get('/name/:name', getBreedXname);

router.get('/length/:length', getBreedXlength);

router.get('/color/:color', getBreedXcolor);

router.get('/find/:id', getBreedXid);

router.post('/',validateToken ,createRecognized);

router.put('/find/:id',validateToken ,updateRecognizedBreed);

router.delete('/find/:id',validateToken ,deleteRecognizedBreed);

router.get('/random', randomBreed);

router.get('/3random', threeRandomBreed);

module.exports = router;