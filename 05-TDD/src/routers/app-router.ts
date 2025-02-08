import { Router } from 'express'
import { createUser } from '../controllers/app-controller'

const route = Router()

export function getRoutes () {
  route.get('/', createUser)

  return route
}
