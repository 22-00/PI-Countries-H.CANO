const { Country, Activity } = require('../db')
const { Op } = require("sequelize")

const getCounstries = async (req, res) => {
    const { name } = req.query
    if(name){
        const countryName = await Country.findAll({
            where: {
                name:{
                    [Op.iLike]: `${name}`
                }
            },
            include: Activity
        })

        if(!countryName.length){
            return res.status(404).json({message: `El pais con el nombre ${name} no fue encontrado`})
        }

        res.status(200).json(countryName)
    }else {
        const countries = await Country.findAll({
        include: {
            model: Activity,
            attributes: ["name"]
        }
    })
    res.status(200).json(countries)
    }
}


module.exports = { getCounstries }