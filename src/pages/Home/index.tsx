import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror desenvolvido e publicado pela Capcom. Lançado originalmente em 20050',
    title: 'Resident Evil 4',
    system: 'PC',
    infos: ['10%', 'R$ 134,91'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror desenvolvido e publicado pela Capcom. Lançado originalmente em 20050',
    title: 'Resident Evil 4',
    system: 'PC',
    infos: ['10%', 'R$ 134,91'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror desenvolvido e publicado pela Capcom. Lançado originalmente em 20050',
    title: 'Resident Evil 4',
    system: 'PC',
    infos: ['10%', 'R$ 134,91'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror desenvolvido e publicado pela Capcom. Lançado originalmente em 20050',
    title: 'Resident Evil 4',
    system: 'PC',
    infos: ['10%', 'R$ 134,91'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Aventura',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação e aventura desenvolvido pela Nintendo EPD e publicado pela Nintendo para o console Nintendo Switch.',
    title: 'The Legend of Zelda',
    system: 'Switch',
    infos: ['17/08'],
    image: zelda
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror desenvolvido e publicado pela Capcom. Lançado originalmente em 2005',
    title: 'Resident Evil 4',
    system: 'PC',
    infos: ['29/09'],
    image: resident
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment. É o quarto título principal da série Diablo e foi lançado em 2024.',
    title: 'The Legend of Zelda',
    system: 'Diablo 4',
    infos: ['24/11'],
    image: diablo
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Star Wars é uma franquia de mídia americana criada por George Lucas, que começou com o filme Star Wars em 1977 e se expandiu para uma franquia multimídia.',
    title: 'Star Wars',
    system: 'Switch',
    infos: ['17/08'],
    image: starWars
  }
]

export default function Home() {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em Breve" background="black" />
    </>
  )
}
