import promptSync from 'prompt-sync'

const prompt = promptSync()

export const promptDeleteUser = async (): Promise<object> => {
  console.log('Você acessou a rota de Deletar Usuários!')

  const data = {
    opt: Number(prompt('1. Deletar usuário por ID, 2. Deletar todos os usuários: ')),
    id: -1
  }

  while (data.opt !== 1 && data.opt !== 2) {
    data.opt = Number(prompt('São aceitos apenas a opção "1" ou "2", tente novamente: '))
  }

  if (data.opt === 1) {
    data.id = Number(prompt('Informe o ID do usuário a ser deletado: '))
  }

  while (isNaN(data.id) || data.id <= 0 && data.id !== -1 ) {
    data.id = Number(prompt('Informe um número válido, positivo: '))
  }

  return data
}
