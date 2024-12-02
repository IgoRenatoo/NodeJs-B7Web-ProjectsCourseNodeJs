import { Router, Request, Response } from 'express'
import { prisma } from '../libs/prisma'

const router = Router()

export function routers () {
  router.get('/ping', (req: Request, res: Response) => {
    res.json({ pong: true })
  })

  router.post('/user', async (req: Request, res: Response) => {
    const user = await prisma.user.create({
      data: {
        name: 'Test',
        email: 'test@mail.com'
      }
    })

    res.json({ user })
  })
  return router
}
