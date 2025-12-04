// const { emailTemplate } = require('./js-foundation/01-template.js');
// require('./js-foundation/02-desestructuring.js')
const {getUserById} = require ('./js-foundation/03-callbacks.js');


// console.log(emailTemplate);
/* module.exports = {
    emailTemplate
}; */

const id = 1;

getUserById(id, function(error, user){
    if(error){
        throw new Error(error);
    };

    console.log(user);
});