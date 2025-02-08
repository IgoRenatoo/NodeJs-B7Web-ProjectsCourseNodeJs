import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()

export const createUserService = async (userName: string, userEmail: string, userPassword: string) => {
  try {
    const isUser = await db.user.findUnique({ where: { email: userEmail } })

    if (isUser) return { code: 409, message: 'Usuário já cadastrado!' }

    const newUser = await db.user.create({
      data: {
        name: userName,
        email: userEmail,
        password: userPassword
      }
    })

    return { code: 201, message: 'Usuário cadastrado com sucesso!', content: newUser }
  } catch (error) {
    return { code: 500, message: `Erro interno no servidor: ${error}` }
  }
}
