import express from 'express'
import helmet from 'helmet'
import 'dotenv/config'

const app = express()

app.use(helmet())

app.listen(process.env.PORT, () => console.log(`Servidor conectado na porta http://localhost:${process.env.PORT}/`))
