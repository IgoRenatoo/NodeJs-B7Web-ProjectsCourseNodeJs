import promptSync from 'prompt-sync'

const prompt = promptSync()

export const promptAddUser = async (): Promise<object> => {
  console.log('Você acessou a rota de adicionar um usuário!')
  const user = {
    name: prompt('Informe o nome do novo usuário: '),
    email: prompt('Informe o email do novo usuário: ')
  }
  return user
}
