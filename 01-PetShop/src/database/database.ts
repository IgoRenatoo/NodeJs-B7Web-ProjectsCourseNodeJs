export type PetType = 'dog' | 'cat' | 'fish';
export type SexType = 'Masculino' | 'Feminino';
export type InfoPet = {
  type: PetType;
  image: string;
  name: string;
  color: string;
  sex: SexType;
};

//Banco de dados fake para implementação do projeto...
export const dbPet: InfoPet[] = [
  // Ordem alterada
  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Tetra Neon',
    color: 'Vermelho e Azul',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Persa',
    color: 'Amarelo',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Amarelo',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'acara.jpg',
    name: 'Acará Bandeira',
    color: 'Preto',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Bengal',
    color: 'Branco, Preto e Amarelo',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'Branco',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Vermelho',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Preto e Branco',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog',
    color: 'Branco e Amarelo',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'siames.jpg',
    name: 'Siamês',
    color: 'Amarelo e Preto',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'matogrosso.jpg',
    name: 'Mato Grosso',
    color: 'Laranja',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'Branco',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'Zwergspitz',
    color: 'Amarelo',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador-retriever',
    color: 'Branco',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e Preto',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Amarelo e Preto',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpa Vidro',
    color: 'Verde e Branco',
    sex: 'Masculino'
  },

  // 23 Novos Animais
  {
    type: 'dog',
    image: 'dalmata.jpg',
    name: 'Dálmata',
    color: 'Branco e Preto',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'rottweiler.jpg',
    name: 'Rottweiler',
    color: 'Preto e Marrom',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'beagle.jpg',
    name: 'Beagle',
    color: 'Branco e Marrom',
    sex: 'Feminino'
  },
  {
    type: 'cat',
    image: 'ragdoll.jpg',
    name: 'Ragdoll',
    color: 'Cinza e Branco',
    sex: 'Feminino'
  },
  {
    type: 'cat',
    image: 'noruegues.jpg',
    name: 'Florestal Norueguês',
    color: 'Preto e Cinza',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'burmes.jpg',
    name: 'Burmês',
    color: 'Marrom e Preto',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'guppy.jpg',
    name: 'Guppy',
    color: 'Multicolorido',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'discus.jpg',
    name: 'Discus',
    color: 'Azul e Vermelho',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'betta.jpg',
    name: 'Betta',
    color: 'Azul',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'oscar.jpg',
    name: 'Oscar',
    color: 'Preto e Laranja',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'maltes.jpg',
    name: 'Maltês',
    color: 'Branco',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'bordercollie.jpg',
    name: 'Border Collie',
    color: 'Preto e Branco',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'chihuahua.jpg',
    name: 'Chihuahua',
    color: 'Marrom Claro',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'akita.jpg',
    name: 'Akita Inu',
    color: 'Branco e Marrom',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'abissinio.jpg',
    name: 'Abissínio',
    color: 'Marrom Claro',
    sex: 'Feminino'
  },
  {
    type: 'cat',
    image: 'himalayo.jpg',
    name: 'Himalaio',
    color: 'Bege e Branco',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'angora.jpg',
    name: 'Angorá',
    color: 'Branco',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'carpa.jpg',
    name: 'Carpa',
    color: 'Branco e Laranja',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'molly.jpg',
    name: 'Molly',
    color: 'Preto',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'platy.jpg',
    name: 'Platy',
    color: 'Laranja e Amarelo',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'peixe-palhaco.jpg',
    name: 'Peixe Palhaço',
    color: 'Laranja e Branco',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'peixe-anjo.jpg',
    name: 'Peixe Anjo',
    color: 'Amarelo',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'tucunare.jpg',
    name: 'Tucunaré',
    color: 'Verde e Preto',
    sex: 'Masculino'
  }
]

