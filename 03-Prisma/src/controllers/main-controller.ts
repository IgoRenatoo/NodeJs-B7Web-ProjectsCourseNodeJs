import { Request, Response } from 'express'
import { addNewUser, getUserById, deleteNewUser } from '../services/index'
import { promptAddUser, promptGetUser, promptDeleteUser } from '../views/index'


export const addUser = async (req: Request, res: Response): Promise<any> => {
  const dataUser = await promptAddUser()
  const newUser = await addNewUser(dataUser)
  console.log('Usuário registrado: ', newUser)
  return newUser
    ? res.status(201).json({ newUser })
    : res.status(500).json({ error: 'Dados já cadastrados!' })
}

export const getUser = async (req: Request, res: Response): Promise<any> => {
  const userId = await promptGetUser()
  const UserById = await getUserById(userId)
  console.log('Usuário selecionado: ', UserById)
  return UserById
    ? res.status(201).json({ UserById })
    : res.status(500).json({ error: 'Usuário não encontrado!' })
}

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  const dataDelete = await promptDeleteUser()
  const deleteById = await deleteNewUser(dataDelete)
  return deleteById
    ? res.status(201).json({ deleteById })
    : res.status(500).json({ error: 'Nenhum Usuário foi deletado!' })
}

export const changeUser = async (req: Request, res: Response): Promise<any> => {
}
