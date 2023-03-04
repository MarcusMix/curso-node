import http from 'http'
import fs from 'fs'
import url from 'url'

const porta = 3000

const server = http.createServer((req, res) => {

    const query = url.parse(req.url, true)
    const fileName = query.pathname.substring(1)

    if(fileName.includes('html')) {
        if(fs.existsSync(fileName)) {
            fs.readFile(fileName, function (error, data) {
                try {
                    res.writeHead(200, {'Content-Type' : 'text/html'})
                    res.write(data)
                    return res.end()
                } catch (error) {
                    console.log(error)
                }
            })
        } else {
            fs.readFile('404.html', function(error, data) {
                res.writeHead(404, {'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()
            })
        }
    } 
})

server.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})