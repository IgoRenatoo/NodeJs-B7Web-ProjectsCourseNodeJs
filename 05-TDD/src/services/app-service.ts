import { db } from '../database/app-database'
import argon2 from 'argon2'

export const createUserService = async (userName: string, userEmail: string, userPassword: string) => {
  try {
    const isUser = await db.user.findUnique({ where: { email: userEmail } })
    if (!userEmail.includes('@')) return { code: 404, message: 'Email inválido!' }
    if (isUser) return { code: 409, message: 'Usuário já cadastrado!' }
    const hash = await argon2.hash(userPassword, {
      type: argon2.argon2id, // Usa a versão mais segura (Argon2id)
      timeCost: 2, // Número de iterações (repetições do algoritmo)
      memoryCost: 15 * 1024, // Memória em KB (15MB = 15 * 1024 KB)
      parallelism: 1 // Número de threads (1 é suficiente para maioria dos casos)
    })
    const newUser = await db.user.create({
      data: {
        name: userName,
        email: userEmail,
        password: hash
      }
    })

    return { code: 201, message: 'Usuário cadastrado com sucesso!', content: newUser }
  } catch (error) {
    return { code: 500, message: `Erro interno no servidor: ${error}` }
  }
}
