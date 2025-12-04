// const { getUUID } = require('../plugins/get-id-plugin.js');
// const { getAge } = require('../plugins/get-age.plugin.js');
const {getAge, getUUID} = require('../plugins');

const builPerson = ({ name, birthdate }) => {
    return {
        id: getUUID(),
        name,
        birthdate,
        age: getAge(birthdate),
    };
};

const obj = { name: 'Angel', birthdate: '2000-01-01' };
const john = builPerson(obj);

console.log(john);