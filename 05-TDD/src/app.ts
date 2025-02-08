import express from 'express'
import { getRoutes } from './routers/app-router'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(getRoutes())

app.listen(process.env.PORT, () => console.log('Servidor conectado com sucesso!'))
