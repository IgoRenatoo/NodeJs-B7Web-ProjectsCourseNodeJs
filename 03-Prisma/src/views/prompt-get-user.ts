import promptSync from 'prompt-sync'
import { IId } from './../types/prompt.interface'

const prompt = promptSync()

export const promptGetUser = async (): Promise<IId> => {
  console.log('Você acessou a rota de buscar um usuário!')
  const user = {
    id: Number(prompt('Informe o ID do usuário: '))
  }
  return user
}
