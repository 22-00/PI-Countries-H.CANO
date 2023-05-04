
const { Activity } = require('../db')


const createActivity = async ( name, dificultad, duracion, temporada, id) => {
    try {
        const actividad = await Activity.create({
            name,
            dificultad,
            duracion,
            temporada
        })
        await actividad.addCountry(id)
        console.log(`La actividad ${name} fue agregada al pais ${id}`)
    } catch (error) {
        console.log(error)
    }
}



const postActivities = async (req, res) => {
    const { name, dificultad, duracion, temporada, id } = req.body;
    
    if(name && dificultad && duracion && temporada && id.length > 0){
        id.forEach((pais)=>{
            createActivity(name, dificultad, duracion, temporada, pais)
        })
        return res.status(201).json({ message: `la actividad ${name} fue creada correctamente` }) 
    } else {
       return  res.status(400).json({ message: "Complete todos los campos para agregar la actividad"})
    }
    
}

module.exports = { postActivities }