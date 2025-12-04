// const { emailTemplate } = require('./js-foundation/01-template.js');
// require('./js-foundation/02-desestructuring.js')
const { getUserById } = require('./js-foundation/04-arrow.js');


// console.log(emailTemplate);
/* module.exports = {
    emailTemplate
}; */

const id = 1;

getUserById(id, (error, user) => {
    if (error) throw new Error(error);

    console.log(user);
});