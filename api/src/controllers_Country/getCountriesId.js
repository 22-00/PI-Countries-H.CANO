const { Country, Activity } = require('../db')

const getCountriesId = async (req, res) => {
     const { idPais } = req.params;

     const selectPais = await Country.findAll({
        where: {
            id: idPais
        },
        include: Activity
     })
     
     if(selectPais.length > 0){
        res.json(selectPais)
     } else {
        return res.status(404).json({ message: 'Pais no encontrado'})
     }
}

module.exports = { getCountriesId }