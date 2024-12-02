import z from 'zod'

// === SCHEMAS DE VALIDAÇÃO === //

// Schema de validação para informações de um usuário
const user = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('Insira um e-mail válido.'), // Validação de email
  age: z.number().min(18, 'Precisa ser >= que 18.').max(120, 'Precisa ser <= que 120.'), // Mínimo e máximo do valor verificado
  sex: z.enum(['Masculino', 'Feminino']), // Aceita apenas as opções configuradas
  height: z.number().gte(175, 'Precisa ser >= que 175.'), // LT, GT, LTE e GTE MenorQ, MaiorQ, E = EqualQ
  weight: z.number().or(z.string()).default(70), // Permite número/string com valor padrão de 70 ~> /*z.union([z.string(), z.number()]).default(70)*/
  active: z.boolean().optional(), // Campo opcional
  attributs: z.string().array() // Um array de string ~> string[]
})

// Schema de validação para informações de habilidades
const skill = z.object({
  language: z.literal('javascript'),
  description: z.string().trim(), // // Remove espaços em branco no início e no final
  file: z.string().startsWith('test').includes('.t').endsWith('s').transform(val => val.split('.')[0]),
  rule: z.string().regex(/^[\p{L}0-9\s!]+$/u) // Expressões regulares.
})

// Interseção dos dois schemas para formar um "perfil completo"
const person = user.and(skill) // Equivalente a z.intersection(userSchema, skillSchema)

// === CRIAÇÃO INTERFACE COM ZOD === //
type IPerson = z.infer<typeof person>

// === DADOS PARA EXEMPLO === //
const data: IPerson = {
  name: 'test',
  email: 'test@mail.com.br',
  age: 30,
  sex: 'Masculino',
  height: 175,
  weight: '78',
  active: true,
  attributs: ['Disciplinado', 'Autruísta', 'Persistente'],
  language: 'javascript',
  description: '   test!',
  file: 'test.ts',
  rule: 'Padrão solicitado!'
}

// === VALIDAÇÃO === //
// `parse` lança exceções se houver erro de validação (use com try/catch).
// `safeParse` retorna um objeto indicando sucesso ou erro, sem lançar exceções.
const results = person.safeParse(data)

if (!results.success) {
  console.error('Erros de validação:', results.error.errors)
} else {
  console.log('Dados válidos:', results)
}
