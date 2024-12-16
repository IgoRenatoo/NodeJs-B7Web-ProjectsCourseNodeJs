import { Request, Response } from 'express'
import { createUser, validation, listAllUsers, updateTokenById } from '../services/main-service'

// Controlador para criar novo usuário
export const addUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, age, password } = req.body

  if (!name || !email || !password) {
    res.status(400).json({ error: 'All data is required for register success' })
    return
  }

  const newUser = await createUser(name, email, age, password)

  if (newUser.success) {
    res.status(201).json({ Request: newUser })
    return
  } else {
    res.status(400).json({ Request: newUser.message })
    return
  }
}

// Controlador para listar todos usuários
export const listUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await listAllUsers()

  if (users.sucess) {
    res.status(200).json({ Request: users })
    return
  } else {
    res.status(400).json(users.message)
    return
  }
}

// Controlador para validar usuário
export const validUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  const isValid = await validation(email, password)

  if (isValid.success) {
    res.status(200).json({ Access: 'Acesso liberado!' })
    return
  } else {
    res.status(400).json({ Access: 'Acesso negado!' })
    return
  }
}

// Controlador para chamar a função para atualizar o Token JWT
export const updateToken = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body
  const user = await updateTokenById(id) // Atualiza o token com base no ID fornecido no body.

  if (user.success) {
    res.status(201).json({ request: 'Token gerado com sucesso!' })
  } else {
    res.status(400).json({ request: 'Falha na atualização, ID incorreto!' })
  }
}
