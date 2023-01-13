const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog, Temperament } = require('../db.js');
const {getDog} = require('./getDogs');
const {getDogID} = require('./getDogID');
const {postDog} = require('./postDog');
const {deleteDog} = require('./deleteDog');
const router = Router();

//GET/Dogs?name=" "

router.get('/', getDog);

//GET/Dogs/:Id

router.get('/:id', getDogID);

//POST/Dogs

router.post('/', postDog);

router.delete('/:id', deleteDog);

module.exports = router;