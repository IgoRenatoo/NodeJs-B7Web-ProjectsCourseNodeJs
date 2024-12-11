import { Request, Response, NextFunction } from 'express'
import { isValidUser } from '../services/main-service'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const hash: string = req.headers.authorization?.split(' ')[1] as string
  const decoded: string = Buffer.from(hash, 'base64').toString()
  const data: string[] = decoded.split(':')
  const success = await isValidUser(data[0], data[1]) // 0 = name, 1 = email
  if (success) {
    next()
  } else {
    res.status(403).json({ error: 'Autorização negada!' })
    return
  }
}
