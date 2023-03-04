import fs from 'fs'

const currentFile = 'arquivo.txt'
const newFile = 'newfile.txt'

fs.rename(currentFile, newFile, function(error) {
    
    if(error) {
        console.log(error)
        return
    }

    console.log(`O arquivo ${currentFile} foi renomeado para ${newFile}!`)

})