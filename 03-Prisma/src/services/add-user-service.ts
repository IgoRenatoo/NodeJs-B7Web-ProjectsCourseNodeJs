import { Prisma } from '@prisma/client'
import { db } from '../database/prisma'

export const addNewUser = async (dataUser: any) => {
  try {
    return await db.user.create({
      data:{
        name: dataUser.name,
        email: dataUser.email
      }
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      console.log('E-mail já cadastrado!')
      return false
    }
    console.error('Error na criação de usuário encontrado!')
    return false
  }
}
