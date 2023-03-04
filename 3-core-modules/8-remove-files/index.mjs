import fs from 'fs'

fs.unlink('arquivo.txt', function(error) {
    
    if(error) {
        console.log(error)
        return
    }

    console.log('arquivo removido!')
})