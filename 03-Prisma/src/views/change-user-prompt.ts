import promptSync from 'prompt-sync'

const prompt = promptSync()

export const promptChangeUser = async (): Promise<number> => {
  console.log('Você acessou a rota de alterar usuário!')
  const user = Number(prompt('Informe o ID do usuário que deseja alterar a Role: '))
  return user
}
