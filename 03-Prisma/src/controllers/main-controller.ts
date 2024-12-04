import { Request, Response } from 'express'
import { createUser, getUser } from '../services/index'
import { promptCreateUser, promptGetUser } from '../views/index'

export const pingPong = async (req: Request, res: Response): Promise<any> => res.status(200).json({ pong: true })

export const addNewUser = async (req: Request, res: Response): Promise<any> => {
  const { name, email } = await promptCreateUser()
  const newUser = await createUser({ name, email })
  console.log('Usuário registrado: ', newUser)
  return newUser
    ? res.status(201).json({ newUser })
    : res.status(500).json({ error: 'Dados já cadastrados!' })
}

export const userById = async (req: Request, res: Response): Promise<any> => {
  const { id } = await promptGetUser()
  const getUserById = await getUser(id)
  console.log('Usuário selecionado: ', getUserById)
  return getUserById
    ? res.status(201).json({ getUserById })
    : res.status(500).json({ error: 'Usuário não encontrado!' })
}
