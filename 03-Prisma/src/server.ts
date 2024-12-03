import express from 'express'
import helmet from 'helmet'
import 'dotenv/config'
import { routers } from './routes/main-route'

const app = express()

// Middleware de segurança e JSON
app.use(helmet())
app.use(express.json())

// Processar conjunto de rotas
app.use(routers())

app.listen(process.env.PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${process.env.PORT} \n`))
