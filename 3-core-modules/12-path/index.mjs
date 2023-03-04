import path from 'path'

const customPath = '/caminho/marcus.txt'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))
console.log(path.normalize(customPath))