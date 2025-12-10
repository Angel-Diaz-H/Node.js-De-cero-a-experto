const { getAge, getUUID } = require('./plugins');
const getPokemonById = require('./js-foundation/06-promises.js');

getPokemonById(4)
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.log('Error al obtener el pokemon!'))
    .finally(() => console.log('Finalmente'));