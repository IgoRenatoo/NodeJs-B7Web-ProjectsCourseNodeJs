import { Router } from 'express'
import { pingPong, addNewUser, userById } from '../controllers/main-controller'

const router = Router()

export function routers () {
  router.get('/ping', pingPong)

  router.post('/user', addNewUser)

  router.post('/get-user', userById)

  return router
}
