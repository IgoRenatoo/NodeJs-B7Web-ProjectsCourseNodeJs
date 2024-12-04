import { db } from '../libs/prisma'

export const getUser = async (userId : number) => {
  try {
    const user = await db.user.findUnique({ where: { id: userId } })

    return user ? user : console.error(`Usuário de ID: ${userId} não encontrado`)

  } catch (error) {
    console.error('Erro ao buscar o usuário:', error)
    throw new Error('Erro ao buscar o usuário')
  }
}
