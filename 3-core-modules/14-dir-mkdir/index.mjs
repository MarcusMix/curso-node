import fs from 'fs'

if(!fs.existsSync('./work')) {
    console.log('Não existe!')
    fs.mkdirSync('work')
} else {
    console.log("Pasta já existe")
}