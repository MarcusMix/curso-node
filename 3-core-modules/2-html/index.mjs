import http from 'http'

const porta = 3000

const server = http.createServer((req, res) => {
    //sucesso
    res.statusCode = 200

    //mudando tipo de conteúdo
    res.setHeader('Content-Type', 'text/html')

    //mensagem
    res.end('<h1>Testando server com node, olha que massa :)</h1>')
    
})

server.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})


