import express from 'express'
import helmet from 'helmet'
import 'dotenv/config'

import { routers } from './routers/main-router'

const app = express()

app.use(helmet())
app.use(express.json())
app.use(routers())

app.listen(process.env.PORT, () => console.log(`Servidor conectado na porta http://localhost:${process.env.PORT}/`))
