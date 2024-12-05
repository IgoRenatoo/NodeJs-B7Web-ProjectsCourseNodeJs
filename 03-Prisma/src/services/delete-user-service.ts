import { db } from '../database/prisma'

export const deleteNewUser = async (data: any): Promise<string> => {
  try {
    if (data.opt === 1) {
      const userExists = await db.user.findUnique({ // Verifica se o usuário existe
        where: {
          id: data.id
        }
      })
      if (!userExists) {
        return `Usuário com ID: ${data.id} não encontrado!`
      }

      await db.user.delete({ // Deleta o usuário se encontrado
        where: {
          id: data.id
        }
      })
      return `Usuário de ID: ${data.id} deletado com sucesso!`
    }

    if (data.opt === 2) {
      await db.user.deleteMany({})
      await db.post.deleteMany({})
      await db.$executeRaw`ALTER TABLE users AUTO_INCREMENT = 1;`
      return 'Todos os usuários foram deletados!!'
    }

    return 'Opção inválida!'
  } catch (error: any) {
    if (error.code === 'P2025') {
      return 'Erro: Usuário não encontrado para exclusão.'
    }

    console.error('Erro ao deletar usuários:', error)
    return 'Erro ao deletar usuários!'
  }
}
