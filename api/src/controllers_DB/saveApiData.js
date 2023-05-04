const { Country } = require('../db');
const { traerInfo } = require('./getApiData')


const cargarDB = async () => {
    try {
      const data = await traerInfo();
      await Promise.all(
        data.map(async (pais) =>
          Country.upsert(pais, {
            where: { id: pais.id },
          })
        )
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  module.exports = { cargarDB };