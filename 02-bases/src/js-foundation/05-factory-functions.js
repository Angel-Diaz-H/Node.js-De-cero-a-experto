const {v4: uuidv4} = require('uuid');
const getAge = require('get-age');

const builPerson = ({ name, birthday }) => {
    return {
        id: uuidv4(),
        name,
        birthday,
        age: getAge(birthday),
    };
};

const obj = { name: 'Angel', birthday: '2000-01-01' };
const john = builPerson(obj);

console.log(john);