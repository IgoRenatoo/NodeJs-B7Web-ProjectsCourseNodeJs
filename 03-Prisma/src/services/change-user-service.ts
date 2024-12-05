import { db } from '../database/prisma'

export const changeUserByid = async (userId: any) => {
  try {
    // Obtém o usuário pelo ID
    const user = await db.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return `Usuário com ID ${userId} não encontrado.`
    }

    // Alterna a role com base no valor atual
    const newRole = user.role === 'USER' ? 'ADMIN' : 'USER'

    // Atualiza o usuário no banco
    const updatedUser = await db.user.update({
      where: { id: userId },
      data: { role: newRole }
    })

    return `Usuário com ID ${userId} teve sua role alterada para ${updatedUser.role}.`
  } catch (error) {
    console.error('Erro ao alternar a role:', error)
    return 'Erro ao alterar a role do usuário.'
  }
}
