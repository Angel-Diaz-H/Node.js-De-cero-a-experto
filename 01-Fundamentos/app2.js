const fs = require('fs');

// Leer el contenido de un archivo de texto de forma síncrona
const data = fs.readFileSync('README.md', 'utf-8');

// Reemplazar todas las ocurrencias de "React" por "Angular", sin importar mayúsculas o minúsculas
const newData = data.replace(/React/ig, 'Angular');

fs.writeFileSync('README-Angular.md', newData);