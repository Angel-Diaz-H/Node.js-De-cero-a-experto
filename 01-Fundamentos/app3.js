const fs = require('fs');
const react = require('react');

const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ');

// Alternativa 1.
// const  reactWordCount = content.split('react').length;

// Alternativa 2.
// Se puede hacer con expresiones regulares también.

// Alternativa 3.
/* const reactWordCount = words.filter(
    word => word.toLowerCase().includes('react')
).length; */

// Alternativa 4.
const reactWordCount = content.match(/react/gi ?? []).length;

// console.log('Palabras: ', words);
console.log('Palabras React: ', reactWordCount);