const users = [
    {
        id: 1,
        name: 'Angel',
    },
    {
        id: 2,
        name: 'Maria'
    }
];

// Opción con función tradicional.
// function getUserById(id, callback) {
//     const user = users.find(function (user) {
//         return user.id === id;
//     });

//     if (!user) {
//         return callback(`User not found with id ${id}`);
//     }

//     return callback(null, user);
// };

// Opción con arrow functions.
/* const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);

    if (!user) return callback(`User not found with id ${id}`);
    
    return callback(null, user);
};
 */

//Opción con ternario.
const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);

    user
        ? callback(null, user)
        : callback(`User not found with id ${id}`);
};

module.exports = {
    getUserById,
};