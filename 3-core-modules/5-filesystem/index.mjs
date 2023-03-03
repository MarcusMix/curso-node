import http from 'http'
import fs from 'fs'

const porta = 3000

const server = http.createServer((req, res) => {

    fs.readFile('index.html', function (error, data) {
        try {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data)
            return res.end()
        } catch (error) {
            console.log(error)
        }
    })
})

server.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})