import { Request, Response } from 'express'
import { addUser, listUsers } from '../services/main-service'

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, age } = req.body

  if (!name || !email) {
    res.status(400).json({ error: 'name and email are required.' })
    return
  }

  const newUser = await addUser(name, email, age)

  if (newUser.success) {
    res.status(201).json({ Request: newUser })
    return
  } else {
    res.status(400).json({ Request: newUser.message })
    return
  }
}

export const listAllUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await listUsers()

  if (users.sucess) {
    res.status(200).json({ Request: users })
    return
  } else {
    res.status(400).json(users.message)
    return
  }
}
