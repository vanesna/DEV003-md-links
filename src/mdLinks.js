const functions = require('./api.js');

const mdLinks = (path, options) => {
    new Promise((resolve, reject) => {
        if (!functions.pathExists(path)) {
            reject('path does not exist')
        }
        else{
            const absPath = ;
            if(!functions.isAbsolute(path)){
             route = functions.toAbsolute(path);
    
            }     
        }
       
    });
}

mdLinks('C:\\Users\\yilib\\Documents\\ProyectosLAB\\DEV003-md-links\\Pruebas', { validate: true }).then((result) => {
    console.log('mdLinks', result);

})
    .catch((Error) => {
        console.log(Error)
    })