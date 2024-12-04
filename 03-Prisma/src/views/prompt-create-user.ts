import promptSync from 'prompt-sync'
import { IUser } from '../types/prompt.interface'

const prompt = promptSync()

export const promptCreateUser = async (): Promise<IUser> => {
  console.log('Você acessou a rota de dicionar um usuário!')
  const user = {
    name: prompt('Informe o nome do novo usuário: '),
    email: prompt('Informe o email: ')
  }
  return user
}
