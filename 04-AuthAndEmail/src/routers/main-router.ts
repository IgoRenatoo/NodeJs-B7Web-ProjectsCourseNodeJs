import { Router } from 'express'
import { createUser, listAllUsers } from '../controllers/main-controller'
import { auth } from '../middleware/auth-middleware'

const router = Router()

export function routers () {
  router.post('/user', createUser)
  router.get('/list', auth , listAllUsers)

  return router
}
