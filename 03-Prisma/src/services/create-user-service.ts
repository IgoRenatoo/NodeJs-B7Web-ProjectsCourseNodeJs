import { Prisma } from '@prisma/client'
import { db } from '../libs/prisma'

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    return await db.user.create({ data })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      console.log('E-mail já cadastrado!')
      return false
    }
    console.log('Error encontrado!')
    return false
  }
}
