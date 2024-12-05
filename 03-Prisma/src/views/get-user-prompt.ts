import promptSync from 'prompt-sync'

const prompt = promptSync()

export const promptGetUser = async (): Promise<number> => {
  console.log('Você acessou a rota de buscar um usuário!')
  const user = Number(prompt('Informe o ID do usuário: '))
  return user
}
