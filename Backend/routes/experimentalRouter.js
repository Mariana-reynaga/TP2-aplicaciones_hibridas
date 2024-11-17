const express = require('express');
const router = express.Router();
router.use(express.json());

const { 
    getExperimentalBreeds, 
    getBreedXid, 
    getBreedXname, 
    getBreedXlength, 
    getBreedXcolor, 
    createExperimental, 
    updateExperimentalBreed, 
    deleteExperimentalBreed,
    randomBreed,
    threeRandomBreed 
} = require('../controllers/ExperimentalController');

// Rutas
router.get('/', getExperimentalBreeds);

router.get('/name/:name', getBreedXname);

router.get('/length/:length', getBreedXlength);

router.get('/color/:color', getBreedXcolor);

router.get('/find/:id', getBreedXid);

router.post('/', createExperimental);

router.put('/find/:id', updateExperimentalBreed);

router.delete('/find/:id', deleteExperimentalBreed);

router.get('/random', randomBreed);

router.get('/3random', threeRandomBreed);

module.exports = router;