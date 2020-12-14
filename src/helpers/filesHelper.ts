// fs lo utilizamos para leer y escribir archivos en el FileSystem
const fs = require('fs')
//Glob es una dependencia que nos ayuda a encotrar más fácil los archivos en los directorios
const glob = require('glob')

function getFile(fileName, fileExtension) {
    return new Promise((resolve, reject) => {
        const extension = fileExtension ? fileExtension : '.*'
        //Primero buscamos el archivo con glob (Sólo revisamos que exista)
        glob('uploads/profile/' + fileName + extension, {}, (err, filesMatched) => {
            if (err || !filesMatched || filesMatched.length == 0) {
                //Si no existe rechazamos la promesa
                reject(false)
            }
            else {
                //Si existe lo leemos con fs
                const filename = filesMatched[0]
                if (filename == '') {
                    reject(false)
                }
                fs.readFile(filename, function (err, data) {
                    if (err) {
                        reject(false)
                    }
                    //Retornamos el archivo binario
                    resolve(data)
                })
            }
        })
    })
}

export { getFile }