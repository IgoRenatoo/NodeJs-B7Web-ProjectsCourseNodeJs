import { Router, Request, Response } from 'express'
import { createUser } from './../services/create-user-service'

const router = Router()

export function routers () {
  router.get('/ping', (req: Request, res: Response): any => res.json({ pong: true }))

  router.post('/user', async (req: Request, res: Response): Promise<any> => {
    const newUser = await createUser({ name: '123', email: '1123test@mail.com' })
    return newUser ? res.status(201).json({ newUser }) : res.status(500).json({ error: 'Dados já cadastrados!' })
  })

  return router
}
