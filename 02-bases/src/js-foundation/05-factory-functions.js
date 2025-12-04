
const builPerson = ({ name, birthday }) => {
    return {
        id: new Date().getTime(),
        name,
        birthday,
        age: new Date().getFullYear() - new Date(birthday).getFullYear(),
    };
};

const obj = { name: 'Angel', birthday: '2000-01-01' };
const john = builPerson(obj);

console.log(john);