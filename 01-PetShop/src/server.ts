import express, { Request, Response, urlencoded } from 'express'
import helmet from 'helmet'
import path from 'path'
import mustache from 'mustache-express'
import { router, notFoundRequest, errorHandler } from './routes/index'
import 'dotenv/config'

const server = express()

// Configurações do servidor
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'mustache')
server.engine('mustache', mustache())

// Middlewares
server.use(helmet())
server.use(express.static(path.join(__dirname, '../assets')))
server.use(urlencoded({ extended: true }))
server.use(router)
server.use(notFoundRequest)
server.use(errorHandler)

// Inicialização do servidor
server.listen(process.env.PORT, () => {
  console.log(`Servidor está rodando no link => http:localhost:${process.env.PORT}`)
})
