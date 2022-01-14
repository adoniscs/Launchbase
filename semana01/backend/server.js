const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
// const path = require('path')
const PORT = 3000

// user arquivos estáticos (img, css)
server.use(express.static('public'))

// setar o motor de vizualização - template engine
server.set('view engine', 'njk')
nunjucks.configure('views', {
  express: server
})

server.get('/', (request, response) => {
  return response.render('index')
})

server.get('/classes', (request, response) => {
  return response.render('classes')
})

server.listen(PORT, () => {
  console.log('Server is running...')
})
