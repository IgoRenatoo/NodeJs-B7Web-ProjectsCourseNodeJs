import { Router } from 'express'
import { addUser, listUsers, updateToken } from '../controllers/main-controller'
import { authBasic } from '../middleware/auth-basic-middleware'
import { authJWT } from '../middleware/auth-jwt-middleware'

const router = Router()

export function routers () {
  router.post('/user', addUser)
  router.post('/updatetoken', updateToken)
  router.get('/listbasic', authBasic.private, listUsers)
  router.get('/listjwt', authJWT.private, listUsers)

  return router
}
