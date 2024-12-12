import { Request, Response, NextFunction } from 'express'
import { isValidUser } from '../services/main-service'

export const authBasic = async (req: Request, res: Response, next: NextFunction) => {
  const hash: string = req.headers.authorization?.split(' ')[1] as string
  const decoded: string = Buffer.from(hash, 'base64').toString()
  const data: string[] = decoded.split(':')
  const success = await isValidUser(data[0], data[1]) // 0 = email, 1 = password
  if (success) {
    next()
  } else {
    res.status(403).json({ error: 'Autorização negada!' })
    return
  }
}
