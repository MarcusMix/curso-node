import http from 'http'

const porta = 3000

const server = http.createServer((req, res) => {

    res.write('teste de http, o marcus é lindo demais rapaz')
    res.end()

})

server.listen(porta, () => {
    console.log('servidor rodando na porta 3000')
})