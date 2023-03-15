
const path = require('path'); // importar ruta
const fs = require('fs'); // file system

const route = 'README.md';
 // const route = 'C:/Users/vanne/Laboratoria/DEV003-md-links/';

// verifica que la ruta existe

const pathExists = (filePath) => {

  // return fs.existsSync(filePath);
  if (fs.existsSync(filePath)) {
    return true;
  }
  else {
    console.log('error');
    return false;
  }
}

// verifica que sea absoluta

const isAbsolute = (filePath) => {
  // return path.isAbsolute(filePath);
  if (path.isAbsolute(filePath)) {
    return true;
  }
  else {
    console.log('not absolute');
    return path.resolve(filePath);
  }
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



console.log('path exists? ', pathExists(route));
console.log('absolute path ', isAbsolute(route));
// console.log('absolute path ', toAbsolute(route));
console.log('is directory? ', isDirectory(route));
console.log('is file? ', isFile(route));
console.log('is md? ', isMD(route));