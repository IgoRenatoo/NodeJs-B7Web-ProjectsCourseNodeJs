import { db } from '../database/app-database'
import { createUserService } from './app-service'

// Cria um bloco contendo vários testes
describe('Testing user service', () => {
  process.env.URL_DATABASE = 'mysql://root:1234@localhost:3306/TDD_db_test?schema=public'

  // Antes de cada teste, limpar o banco de dados
  beforeEach(async () => {
    await db.user.deleteMany()
  })
  // Após os testes, fechar a conexão com o banco
  afterAll(async () => {
    await db.$disconnect()
  })

  const name = 'IgorTest'
  const email = 'test@jest.com'
  const password = '123'
  // Teste unitário
  it('Should return user created', async () => {
    const newUser = await createUserService(name, email, password)
    expect(newUser).not.toBeInstanceOf(Error)
    expect(newUser).toHaveProperty('content')
  })
})
