const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getTemperaments} = require('./getTemperaments');

const router = Router();

router.get('/', getTemperaments)

module.exports = router;