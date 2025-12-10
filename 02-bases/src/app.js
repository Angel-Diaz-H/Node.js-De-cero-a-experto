// const { emailTemplate } = require('./js-foundation/01-template.js');
// require('./js-foundation/02-desestructuring.js')
// const { getUserById } = require('./js-foundation/05-factory-functions.js');
const { builPerson } = require('./js-foundation/05-factory-functions.js');
const { getAge, getUUID } = require('./plugins');

// console.log(emailTemplate);
/* module.exports = {
    emailTemplate
}; */

/* const id = 1;

getUserById(id, (error, user) => {
    if (error) throw new Error(error);

    console.log(user);
}); */

const makePerson = builPerson({ getUUID, getAge })
const obj = { name: 'Angel', birthdate: '2000-01-01' };

const john = makePerson(obj);
console.log(john);