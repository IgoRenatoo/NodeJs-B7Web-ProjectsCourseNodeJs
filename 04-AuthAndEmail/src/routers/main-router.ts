import { Router } from 'express'
import { createUser, listAllUsers } from '../controllers/main-controller'
import { authBasic } from '../middleware/auth-basic-middleware'

const router = Router()

export function routers () {
  router.post('/user', createUser)
  router.get('/list', authBasic , listAllUsers)

  return router
}
