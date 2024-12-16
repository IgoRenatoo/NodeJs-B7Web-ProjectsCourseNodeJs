import { dbPrisma } from './../database/prisma-database'
import JWT from 'jsonwebtoken'
import 'dotenv/config'

// Cria um novo usuário
export const createUser = async ( name: string, email: string, age: number, password: string) => {
  const hasUser = await dbPrisma.userAuth.findFirst({ where: { OR: [{ name }, { email }] } })
  if (hasUser) {
    return { sucess: false, message: 'User with the same name or email already exists.' }
  }
  try {
    const newUser = await dbPrisma.userAuth.create({
      data: { name: name, email: email, age: age, password: password }
    })

    return { success: true, newUser }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, message: 'An error occurred while creating the user.' }
  }
}

// Lista todos os usuários
export const listAllUsers = async () => {
  try {
    const users = await dbPrisma.userAuth.findMany()
    return { sucess: true, users }
  } catch (error) {
    console.error('Error fetching users:', error)
    return { sucess: false, message: 'Unable to fetch users.' }
  }
}

// Validar usuário com base no nome e senha
export const validation = async ( email: string, password: string) => {
  const dataUser = await dbPrisma.userAuth.findFirst({
    where: {
      email: email,
      password: password
    }
  })

  if (dataUser) {
    return { success: true }
  } else {
    return { success: false }
  }
}

// Procura usuário por ID, caso encontre atualiza o token
export const updateTokenById = async (id: number) => {
  try {
    const dataUser = await dbPrisma.userAuth.findUnique({
      where: { id: id }
    })
    if (dataUser) {
      const token = JWT.sign(
        { email: dataUser.email, password: dataUser.password },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: '1m' }
      )
      await dbPrisma.userAuth.update({
        where: { id: dataUser.id },
        data: { token: token }
      })
      return { success: true, message: dataUser }
    } else {
      return { success: false, message: 'Unable to fetch user.' }
    }
  } catch (error) {
    console.error('Error fetching user:', error)
    return { success: false, message: 'Error to fetch user.' }
  }
}

// Procura usuário por ID, caso encontre retorna usuário
export const getTokenById = async (id: number) => {
  try {
    const dataUser = await dbPrisma.userAuth.findUnique({
      where: { id: id }
    })

    if (dataUser) {
      return { success: true, user: dataUser }
    } else {
      return { success: false, message: 'Unable to fetch user.' }
    }
  } catch (error) {
    console.error('Error fetching user:', error)
    return { success: false, message: 'Error to fetch user.' }
  }
}
