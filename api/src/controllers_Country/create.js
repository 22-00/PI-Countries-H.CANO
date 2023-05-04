const { Country } = require('../db')

const postCountry = async(req, res) => {

    const {name, image, continente, subregion, area, poblacion, id} = req.body;

    await Country.create({name, image, continente, subregion, area, poblacion, id})
    
    return res.json({message: ` El Pais ${name} creado con exito`})
}

module.exports = { postCountry }