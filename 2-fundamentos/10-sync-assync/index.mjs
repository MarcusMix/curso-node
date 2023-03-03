import fs from 'fs'

console.log('primeiro')

fs.writeFileSync('arquivo.txt', 'oi')

console.log('segundo')