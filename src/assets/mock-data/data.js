import {v4} from 'uuid'

export const regions = [
  {
    id: v4(),
    img: './regions/bishkek.png',
    text: "Весь Кыргызстан",
    liked: false,
  },
  {
    id: v4(),
    img: './regions/chui.png',
    liked: false,
    text: "Чуйская область"
  },
  {
    id: v4(),
    img: './regions/osh.png',
    liked: false,
    text: "Ошская область"
  },
  {
    id: v4(),
    img: './regions/talas.png',
    liked: true,
    text: "Таласская область"
  },
  {
    id: v4(),
    img: './regions/ik.png',
    liked: false,
    text: "Ыссык-Кульская область"
  },
  {
    id: v4(),
    img: './regions/naryn.png',
    liked: true,
    text: "Нарынская область"
  },
  {
    id: v4(),
    img: './regions/jalal-abad.png',
    liked: false,
    text: "Джалал-Аблаская область"
  },
  {
    id: v4(),
    img: './regions/batken.png',
    liked: false,
    text: "Баткенская область"
  },
];



export const articles =  [
  {
    id:1,
    img:'./articles/ik.png',
    text: 'Иссыкуль'
  },
  {
    id: 2,
    img: './articles/aktuz.png',
    text: 'Ак-Тюз'
  },
  {
    id: 3,
    img: './articles/manas.png',
    text: '«Чаша Манаса»'
  },
  {
    id: 4,
    img: './articles/ik.png',
    text: 'Иссыкуль'
  },
  {
    id: 5,
    img: './articles/ik.png',
    text: 'Иссыкуль'
  },
]

export const foodPlace = [
  {
    id:1,
    img:'./foodPlace/supara.png',
    text:'Супара Этно-комплекс'
  },
  {
    id: 2,
    img: './foodPlace/faiza.png',
    text: 'Фаиза',
  },
  {
    id: 3,
    img: './foodPlace/navat.png',
    text: 'Чайхана Navat'
  },
  {
    id: 4,
    img: './foodPlace/chaina.png',
    text: 'China Town'
  },
  {
    id: 5,
    img: './foodPlace/cloud.png',
    text: 'Облако 53'
  },
]


export const reluxPlace = [
  {
    id:1,
    img:'./reluxPlace/orion.png',
    text:'Orion Hotel'
  },
  {
    id: 2,
    img: './reluxPlace/sheraton.png',
    text: 'Sheraton'
  },
  {
    id: 3,
    img: './reluxPlace/novotel.png',
    text: 'Novotel'
  },
  {
    id: 4,
    img: './reluxPlace/jannat.png',
    text: 'Jannat Regency'
  },
  {
    id: 5,
    img: './reluxPlace/hyat.png',
    text: 'Hyatt Regency'
  },
]