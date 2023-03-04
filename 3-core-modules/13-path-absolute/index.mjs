import path from "path";

//caminho absoluto (desde o ssd)
console.log(path.resolve("teste.txt"));

//formatador 
const someFolder = 'arquivoGenerico'
const anyFolder = 'historicoGoogle.txt'

//junta tudo
const unionPath = path.join('/', 'arquivos.js', someFolder, anyFolder)

console.log(unionPath)
