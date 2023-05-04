const { Activity } = require('../db')

const allActivity = async (req, res) => {
        try {
            const createAct = await Activity.findAll();
                let arrAct = [];
                if (createAct.length > 0) {
                    arrAct = createAct.reduce((prev, curr) => {
                    if (!prev.some((act) => act.name === curr.name)) {
                        prev.push(curr);
                    }
                    return prev;
                    }, []);
                }
                res.send(arrAct);
           
        } catch (error) {
            console.log(error)
            res.status(500).send({ error: 'Error al obtener las actividades' });
        }
}

module.exports = { allActivity }


// {
//     "name": "URUGUAY",
//     "image": "foto de uruguay",
//     "continente": "sudamerica",
//     "subregion": "sudamerica",
//     "area": "12000000",
//     "poblacion":"13000000",
//     "id": "URU"
// }


