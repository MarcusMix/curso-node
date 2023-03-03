import http from 'http'
import url from 'url'

const porta = 3000

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200

    res.setHeader('Content-Type', 'text/html')

    if(!name) {
        res.end(
                `
                    <h1>
                        Preencha o seu nome: 
                    </h1>
                    <form methot="GET">
                        <input type="text" name="name">
                        <input type="submit" value="enviar">
                    </form>
                `
                )
    } else {
        res.end(`<h1>Seja Bem-Vindo ${name}</h1>`)
    }
})

server.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})