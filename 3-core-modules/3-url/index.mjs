import url from 'url'

const adress = 'https://www.marcus-sandi.tech/projetos?node=db'
const parsedUrl = new url.URL(adress)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('node'))