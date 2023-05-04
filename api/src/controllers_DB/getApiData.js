const axios = require('axios');
const URL = 'https://restcountries.com/v3/all';

const traerInfo = async () => {
  try {
    const response = await axios.get(URL);
    const data = response.data.map(async (pais) => ({
      id: pais.cca3,
      name: pais.name.common || 'Not found',
      image: pais.flags.svgFile || pais.flags[1] || 'Not found',
      continente: pais.region || 'Not found',
      subregion: pais.subregion || 'Not found',
      area: pais.area || 0,
      poblacion: pais.population || 0,
    }));
    return await Promise.all(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};


module.exports = { traerInfo };

