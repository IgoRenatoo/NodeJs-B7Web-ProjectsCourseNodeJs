# 🔮 Utilizando o Zod para Validação de Dados no Projeto

O [Zod](https://zod.dev/) é uma biblioteca de TypeScript para validação e manipulação de dados. Este README demonstra como utilizá-lo para criar schemas de validação e validar objetos no seu projeto.

---

## Instalação
> Primeiro, instale a biblioteca Zod no seu projeto:

<pre>
npm install zod
</pre>

---

### Importação
> Para utilizar o Zod, importe a biblioteca no seu arquivo:

<pre>
import z from "zod";
</pre>

---

## Criação de Schemas de Validação

### Schema de Usuário
> O schema a seguir valida informações de um usuário:

<pre>
const user = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Insira um e-mail válido."),
  age: z.number().min(18, 'Precisa ser >= que 18.').max(120, 'Precisa ser <= que 120.'),
  sex: z.enum(['Masculino', 'Feminino']),
  height: z.number().gte(175, 'Precisa ser >= que 175.'),
  weight: z.number().or(z.string()).default(70),
  active: z.boolean().optional(),
  attributs: z.string().array()
});
</pre>

---

### Schema de Habilidades
> O schema abaixo valida informações sobre habilidades:

<pre>
const skill = z.object({
  language: z.literal('javascript'),
  description: z.string().trim(),
  file: z.string().startsWith('test').includes('.t').endsWith('s').transform(val => val.split('.')[0]),
  rule: z.string().regex(/^[\p{L}0-9\s!]+$/u)
});
</pre>

---

### Interseção dos Schemas
> Para combinar os schemas acima e criar um perfil completo:

<pre>
const person = user.and(skill);
</pre>

---

## Inferindo Tipos com Zod
> É possível inferir tipos a partir dos schemas criados:

<pre>
type IPerson = z.infer<typeof person>;
</pre>

---

## Validação de Dados
> Exemplo de objeto a ser validado:

<pre>
let data: IPerson = {
  name: 'test',
  email: 'test@mail.com.br',
  age: 30,
  sex: 'Masculino',
  height: 175,
  weight: '78',
  active: true,
  attributs: ['Disciplinado', 'Altruísta', 'Persistente'],
  language: 'javascript',
  description: '   test!',
  file: 'test.ts',
  rule: 'Padrão solicitado!'
};
</pre>

### Métodos de Validação
> O Zod oferece dois métodos principais para validação:

- `parse`: Lança exceções em caso de erro.
- `safeParse`: Retorna um objeto com informações sobre sucesso ou erro.

Exemplo com `safeParse`:

<pre>
const results = person.safeParse(data);

if (!results.success) {
  console.error("Erros de validação:", results.error.errors);
} else {
  console.log("Dados válidos:", results);
}
</pre>
