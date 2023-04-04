const ArrayResult = [
    {
        href: 'https://nodejs.org/es/',
        text: 'Node.js',
        file: 'C:\\Users\\vanne\\Laboratoria\\DEV003-md-links\\prueba1\\prueba1.md',
        status: 200,
        statusText: 'ok'
    },
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\vanne\\Laboratoria\\DEV003-md-links\\prueba1\\prueba2\\prueba.md',
        status: 200,
        statusText: 'ok'
    },
    {
        href: 'https://github.com/kenruizinouett-node-fetch-ejemplo/blob/app.js',
        text: 'Github',
        file: 'C:\\Users\\vanne\\Laboratoria\\DEV003-md-links\\prueba1\\prueba2\\prueba.md',
        status: 404,
        statusText: 'fail'
    }
]


//Total de links
const totalLinks = (array) => {
    const total = array.length;
    return 'Total: ' + total;
}

//console.log(totalLinks(ArrayResult));

//Links unicos
const uniqueLinks = (array) => { 
   
}


//Links rotos
const brokenLinks = (arrayLinks) => { 
    const broLinks = arrayLinks.filter(array => array.statusText === 'fail'); //arreglo
    return 'Broken: ' + broLinks.length;
}

//console.log(brokenLinks(ArrayResult));

module.exports = {totalLinks, brokenLinks}