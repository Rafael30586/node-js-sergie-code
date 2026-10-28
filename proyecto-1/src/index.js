import { getAuthor, getTitle } from "./functions.js"; // Esta es la forma 
// moderna (desde ES6) de importar en node. Para que esta forma 
// nueva de importar funcione hay que colocar la propiedad type: module en el
// archivo package.json 

console.log(getTitle())
console.log(getAuthor('Sergie Code'))