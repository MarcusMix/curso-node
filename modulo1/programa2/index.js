const fs = require('fs') // file system

fs.readFile('arquivo.txt', 'utf8', (error, data) => {
    if(error) {
        console.log(error)
    }else{
        console.log(data)
    }
});