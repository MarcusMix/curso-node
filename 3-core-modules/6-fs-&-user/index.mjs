import http from 'http'
import fs from 'fs'
import url from 'url'

const porta = 3000

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    if(!name) {
        fs.readFile('index.html', function (error, data) {
            try {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()
            } catch (error) {
                console.log(error)
            }
        })
    } else {
        fs.writeFile('arquivo.txt', name, function(error, data) {
            res.writeHead(302, {
                Location: '/'
            })
            return res.end()
        })
    }

    
})

server.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})