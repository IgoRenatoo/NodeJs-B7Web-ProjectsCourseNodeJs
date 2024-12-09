import { Router } from 'express'
import { addUser } from '../controllers/main-controller'

const router = Router()

export function routers () {
  router.post('/user', addUser as any)

  return router
}
