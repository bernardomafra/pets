const pets = [
  {
    id: 1,
    petType: 'dog',
    title: 'Lola',
    subtitle: 'Basset Hound',
    age: '7 anos',
    gender: 'girl',
    photoSource: {
      uri:
        'https://images.unsplash.com/photo-1615345036240-a95cde8c04b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80',
    },
    description:
      'Lola é uma cachorrinha super fofa, engraçada, companheira e carente. Ela é cheia de manias e está mal acostumada, só come a ração se tiver alguém olhando e late chamando pra ir lá com ela pra comer.Está acostumada a dormir dentro de casa mas já é comportada e se precisa fazer suas necessidades no meio da noite sempre acorda todo mundo pra levar ela pra fora...',
    traits: ['fofa', 'engraçada', 'companheira', 'carente'],
    owner: {
      image: {
        uri:
          'https://images.unsplash.com/photo-1615345588011-089b03015d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      },
      name: 'Bernardo Mafra',
      registerDate: '10 Mar 2021',
    },
  },
  {
    id: 2,
    petType: 'dog',
    title: 'Buddy',
    subtitle: 'Shiba Inu',
    age: '3 Meses',
    gender: 'boy',
    photoSource: {
      uri:
        'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
    },
    description:
      'Buddy é um cachorro ativo, brincalhão, leal e super amigável para nossa família. Ele ama brincar de buscar com as pessoas, e não se importa que pessoas desconhecidas façam carinho na sua cabeça.',
    traits: ['ativo', 'amigável', 'leal', 'brincalhão'],
    owner: {
      image: {
        uri:
          'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      name: 'Julio Oliveira',
      registerDate: '20 Jan 2021',
    },
  },
  {
    id: 3,
    petType: 'cat',
    title: 'Catu',
    subtitle: 'Maine Coon',
    age: '6 Meses',
    gender: 'girl',
    photoSource: {
      uri:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80',
    },
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
    id: 4,
    petType: 'bird',
    title: 'Pequi',
    subtitle: 'Periquito',
    age: '6 Meses',
    gender: 'boy',
    photoSource: {
      uri:
        'https://images.unsplash.com/photo-1604453361235-7fb07b418f9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    description:
      'Pequi é um pássaro quieto, apesar de ser muito falador e gostar de cantar. Ele ama cantar parabéns para você (mas só sabe o refrão sozinho).',
    traits: ['quieto', 'falador', 'cantor'],
    owner: {
      image: {
        uri:
          'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      },
      name: 'Rafael Pereira',
      registerDate: '17 Fev 2021',
    },
  },
];

export default pets;
