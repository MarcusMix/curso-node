import fs from 'fs'

fs.stat('arquivo.txt', (error, stats) => {
    if(error) {
        console.log(error)
        return
    }

    //detalhes do arquivo
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)
})