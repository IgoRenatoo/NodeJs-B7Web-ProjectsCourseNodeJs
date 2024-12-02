import express from 'express'
import helmet from 'helmet'

import 'dotenv/config'
import { routers } from './router/main-router'


const app = express()
const PORT = process.env.PORT || 3000

// Middleware de segurança e JSON
app.use(helmet())
app.use(express.json())

// Processar conjunto de rotas
app.use(routers())

app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`))
