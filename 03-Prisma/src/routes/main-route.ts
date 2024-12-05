import { Router } from 'express'
import { addUser, getUser, deleteUser } from '../controllers/main-controller'

const router = Router()

export function routers () {
  router.post('/user', addUser)

  router.get('/get-user', getUser)

  router.delete('/delete-user', deleteUser)

  return router
}
