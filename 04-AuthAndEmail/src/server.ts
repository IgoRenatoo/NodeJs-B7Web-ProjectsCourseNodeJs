import express from 'express'
import helmet from 'helmet'
import passport from 'passport'
import 'dotenv/config'

import { routers } from './routers/main-router'

const app = express()

app.use(helmet())
app.use(passport.initialize())
app.use(express.json())
app.use(routers())

app.listen(process.env.PORT, () => console.log(`Servidor conectado na porta http://localhost:${process.env.PORT}/`))
