
const path = require('path'); // importar ruta
const fs = require('fs'); // file system

const route = 'prueba.md';
// const route = 'C:/Users/vanne/Laboratoria/DEV003-md-links/';
const data = '[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado [Google](http://google.com/)';
// const data = 'es un lenguaje de marcado';

// verifica que la ruta existe
const pathExists = (filePath) => {
  return fs.existsSync(filePath);
}

// verifica que sea absoluta
const isAbsolute = (filePath) => {
  return path.isAbsolute(filePath);
}

// convierte a absoluta
const toAbsolute = (filePath) => {
  return path.resolve(filePath);
}

// valida si es un directorio
const isDirectory = (filePath) => {
  return fs.statSync(filePath).isDirectory();
}

// valida si es un archivo
const isFile = (filePath) => {
  return fs.statSync(filePath).isFile();
}

// valida si es un md
const isMD = (filePath) => {
  if (path.extname(filePath) === '.md') {
    return true;
  }
  else
    return false;
}

// leer archivo
const readDoc = (filePath) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject('error');
      }
      resolve(data);
    });
  })
}

// expresion regular 
const regExp = /\[([\w\s.]+)\]\((((http|https):\/\/)[\w./?=-]+)\)/gm;
const regExpHref = /((http|https):\/\/)[\w./?\-=]+/gm      //links
const regExpText = /\[([\w\s.]+)\]/gm      // info

// verificar si hay links
const getLinks = (data, filePath) => {
  // const file = readDoc(filePath);
  const arrayLinks = [];
  const links = data.match(regExp);
  if (links) {
    for(let i = 0; i < links.length; i++){
      arrayLinks.push({
        href: links[i].match(regExpHref).join(),
        text: links[i].match(regExpText).join().slice(1,-1),
        file: toAbsolute(filePath),
      })
    }
  }
  else{
    console.log('Links do not exist')
  }
  return arrayLinks;
}


module.exports = {
  pathExists, isAbsolute, toAbsolute, isFile, isMD, readDoc, getLinks,
}


// console.log('path exists? ', pathExists(route));
// console.log('absolute path? ', isAbsolute(route));
// console.log('absolute path ', toAbsolute(route));
// console.log('is directory? ', isDirectory(route));
// console.log('is file? ', isFile(route));
// console.log('is md? ', isMD(route));
// readDoc(route).then((result) => console.log(result));
// readDoc(route).catch(error => console.log(error));

const readfilee = readDoc(route)

readfilee.then(result => {
  console.log('La promise funciona:', result)
}).catch(error => {
  console.log('La promise no funciona', error)
})



console.log('links', getLinks(data, route));