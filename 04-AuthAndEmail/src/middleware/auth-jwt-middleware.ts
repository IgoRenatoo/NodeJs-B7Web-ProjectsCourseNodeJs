import { Request, Response, NextFunction } from 'express'
import { getTokenById } from '../services/main-service'
import JWT from 'jsonwebtoken'

// Verifica pelo ID do usuário se o token dele é valido
export const authJWT = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body
    const dataUser = await getTokenById(id)
    try {
      const decoded = JWT.verify(
        dataUser.user?.token as string,
        '123'
      )
      if (decoded) {
        next()
      }
    } catch (error) {
      res.status(403).json({ error: 'Autorização negada!' })
    }
  }
}
