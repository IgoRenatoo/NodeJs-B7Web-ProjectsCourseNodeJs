import { Router, Request, Response } from 'express'

const router = Router()

export function routers () {
  router.get('/ping', (req: Request, res: Response) => {
    res.json({ pong: true })
  })

  return router
}
