import { dbPet, PetType, InfoPet } from "../database/database";

export const getPet = {
  // Exibi todos os Pet's registrados no banco de dados.
  getAll: (): InfoPet[] => {
    return dbPet;
  },

  // Exibi todos os Dog's registrados no banco de dados.
  getDog: (): InfoPet[] => {
    const allDog = dbPet.filter(pet => pet.type == 'dog')
    console.log(allDog)
    return allDog;
  }
};
