const functions = require('./api.js');

const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        if (!functions.pathExists(path)) {
            reject('path does not exist')
        }
        else {
            const allPaths = functions.readAll(path) // arreglo con todas las rutas absolutas
            console.log('allPaths: ', allPaths);

            const promisesData = [];
            for (let i = 0; i < allPaths.length; i++) {
                const allData = functions.readDoc(allPaths[i])
                promisesData.push(allData);
            };

            Promise.all(promisesData).then(results => {
                let allLinks = [];
                if (!options.validate) {
                    for (let i = 0; i < results.length; i++) {
                        const arrayLinks = functions.getLinks(results[i], allPaths[i]);
                        //console.log('arrayLinks: ', arrayLinks);
                        allLinks = allLinks.concat(arrayLinks);
                        //console.log('allLinks: ', allLinks);
                    }
                    resolve(allLinks);
                }
                else{
                    functions.getStatus(allLinks).then((res) => resolve(res))
                }
            });
        }
    });
}


// C:\Users\vanne\Laboratoria\DEV003-md-links\prueba1\prueba2\dir-vacio

const path = '../DEV003-md-links/prueba1';
mdLinks(path, { validate: false })
    .then((res) => console.log(res))
    .catch((error) => console.log(error))


// const resultado2 = '../DEV003-md-links/prueba1/prueba2/prueba.md';
// mdLinks(resultado2, { validate: false })
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))

module.exports = { mdLinks }