import { Request, Response } from 'express'
import { createUserService } from '../services/app-service'

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password } = req.body
    const newUser = await createUserService(name, email, password)
    return res.status(newUser.code).json({ message: newUser.message, content: newUser.content })
  } catch (error) {
    return res.status(500).json({ message: `Erro ao criar usuário: ${error}` })
  }
}
