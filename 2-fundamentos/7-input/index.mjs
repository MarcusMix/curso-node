import readline from 'readline'

readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Quantos copos de café você ja tomou hoje?', (language) => {
    console.log('O usuário tomou' + language + 'copos de café!')
    readline.close()
})