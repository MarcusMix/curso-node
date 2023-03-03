import fs from 'fs'

console.log("inicio")

fs.writeFile('arquivo2.txt', 'assync', function () {
    setTimeout(function () {
        console.log('arquivo criado!')
    }, 1000)
})

console.log('fim')