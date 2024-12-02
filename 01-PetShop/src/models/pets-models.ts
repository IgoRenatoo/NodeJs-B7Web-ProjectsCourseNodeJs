import { dbPet, InfoPet } from '../database/database'

export const getPet = {
  // Exibe todos os Pet's registrados no banco de dados.
  getAll: (): InfoPet[] => dbPet,

  // Exibe Pet's com base na busca.
  searchByName: (name: string): InfoPet[] => dbPet.filter(pet => pet.name.toLowerCase().includes(name.toLowerCase())),

  // Função para exibir os Pet's pelo tipo especificado.
  getByType: (type: string): InfoPet[] => dbPet.filter(pet => pet.type === type),

  // Exibe os Pet's registrados para cada tipo.
  getDog: (): InfoPet[] => getPet.getByType('dog'),
  getCat: (): InfoPet[] => getPet.getByType('cat'),
  getFish: (): InfoPet[] => getPet.getByType('fish')
}
