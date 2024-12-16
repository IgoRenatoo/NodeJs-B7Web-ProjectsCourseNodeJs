import { Request, Response, NextFunction } from 'express'
import { validation } from '../services/main-service'

// Autenticar usuário pelo headers.authorization
export const authBasic = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    const hash: string = req.headers.authorization?.split(' ')[1] as string
    const decoded: string = Buffer.from(hash, 'base64').toString()
    const data: string[] = decoded.split(':')
    const acess = await validation(data[0], data[1]) // 0 = email, 1 = password
    if (acess.success) {
      next()
    } else {
      res.status(403).json({ error: 'Autorização negada!' })
      return
    }
  }
}
