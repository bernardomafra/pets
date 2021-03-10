const pets = [
  {
    id: 1,
    petType: 'dog',
    title: 'Buddy',
    subtitle: 'Shiba Inu',
    age: '1 ano',
    gender: 'boy',
    photoSource: require('../../../app/assets/buddy.png'),
    description:
      'Buddy é um cachorro ativo, brincalhão, leal e super amigável para nossa família. Ele ama brincar de buscar com as pessoas, e não se importa que pessoas desconhecidas façam carinho na sua cabeça.',
    traits: ['ativo', 'amigável', 'leal', 'brincalhão'],
    owner: {
      image: null,
      name: 'Julio Oliveira',
      registerDate: '20 Jan 2021',
    },
  },
  {
    id: 2,
    petType: 'cat',
    title: 'Catu',
    subtitle: 'Maine Coon',
    age: '6 Meses',
    gender: 'girl',
    photoSource: require('../../../app/assets/cooter.png'),
    description:
      'Catu é um gato ativo, brincalhão, engraçado e super amigável. Ele ama brincar de subir nas coisas e se esconde nos lugares mais inesperados da casa, é uma aventura ter esse garoto como amigo.',
    traits: ['ativo', 'amigável', 'engraçado', 'brincalhão'],
    owner: {
      image: require('../../../app/assets/jessi.png'),
      name: 'Fernanda Azevedo',
      registerDate: '03 Mar 2021',
    },
  },
  {
    id: 3,
    petType: 'bird',
    title: 'Pequi',
    subtitle: 'Periquito',
    age: '6 Meses',
    gender: 'girl',
    photoSource: require('../../../app/assets/buddy.png'),
    description:
      'Pequi é um pássaro quieto, apesar de ser muito falador e gostar de cantar. Ele ama cantar parabéns para você (mas só sabe o refrão sozinho).',
    traits: ['quieto', 'falador', 'cantor'],
    owner: {
      image: null,
      name: 'Rafael Pereira',
      registerDate: '17 Fev 2021',
    },
  },
];

export default pets;
