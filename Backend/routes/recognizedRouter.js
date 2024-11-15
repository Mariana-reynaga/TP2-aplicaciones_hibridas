const express = require('express');
const router = express.Router();
router.use(express.json());

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

router.get('find/:id', getBreedXid);

router.post('/', createRecognized);

router.put('find/:id', updateRecognizedBreed);

router.delete('find/:id', deleteRecognizedBreed);

router.get('/random', randomBreed);

router.get('/3random', threeRandomBreed);

module.exports = router;