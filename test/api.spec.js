const { pathExists, isAbsolute, toAbsolute, isFile, isMD, readDoc, getLinks } = require('../src/api.js');

describe('path exists?', () => {

    it('should be a function', () => {
        expect(typeof pathExists).toBe('function');
    });

    it('should return true', () => {
        expect(pathExists('README.md')).toBeTruthy();
    });
});

describe('is absolute path?', () => {

    it('should be a function', () => {
        expect(typeof isAbsolute).toBe('function');
    });

    it('should return true if the path is absolute', () => {
        expect(isAbsolute('README.md')).toBeFalsy();
    });
});

describe('convert path to absolute', () => {

    it('should be a function', () => {
        expect(typeof toAbsolute).toBe('function');
    });

    it('should return absolute path', () => {
        expect(toAbsolute('README.md')).toBe('C:\\Users\\vanne\\Laboratoria\\DEV003-md-links\\README.md');
    });
});

describe('is file?', () => {

    it('should be a function', () => {
        expect(typeof isFile).toBe('function');
    });

    it('should return true if path is a file', () => {
        expect(isFile('README.md')).toBeTruthy();
    });
});

describe('is MD?', () => {

    it('should be a function', () => {
        expect(typeof isMD).toBe('function');
    });

    it('should return true if file is md', () => {
        expect(isMD('README.md')).toBeTruthy();
    });
    it('should return false if file is not md', () => {
        expect(isMD('README.txt')).toBeFalsy();
    });
});

describe('read file', () => {

    const file = 'Texto de prueba\n' +
    '[Markdown](https://es.wikipedia.org/wiki/Markdown) \n' +
    '[Google](http://google.com/)' 

        it('should be a function', () => {
            expect(typeof readDoc).toBe('function');
        });

    test('data', () => {
        return expect(readDoc('prueba.md')).resolves.toEqual(file);
    });

    test('the promise es rejeted', () => {
        return expect(readDoc('READE.md')).rejects.toMatch('error');
    });

});