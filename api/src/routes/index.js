// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require('express');
const { getCounstries } = require("../controllers_Country/getCountries")
const { getCountriesId } = require('../controllers_Country/getCountriesId')
const { allActivity } = require('../controllers_Ativity/getActivity')
const { postActivities } = require('../controllers_Ativity/postActivity')
const { postCountry } = require('../controllers_Country/create')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/countries', getCounstries) 
router.get('/countries/:idPais', getCountriesId)
router.post('/countries', postCountry)
router.get('/activities', allActivity)
router.post('/activities', postActivities)


module.exports = router;

// const routerCountries = require('./routerCountries');
// const routerActivity = require('./routerActivity')