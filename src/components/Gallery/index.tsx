import Section from '../Section'

import { Item, Items, Action, Modal, ModalContent } from './styles'

import hogwartsLegacy from '../../assets/images/hogwarts_section.png'
import modalHogwarts from '../../assets/images/modal_hogwarts.png'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/close.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwartsLegacy
  },
  {
    type: 'image',
    url: hogwartsLegacy
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/BtyBjOW8sGY?si=qCvQPIIG4U1-Ftmu'
  }
]

type Props = {
  defaultCover: string
  name: string
}

export default function Gallery({ defaultCover, name }: Props) {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Fechar" />
          </header>
          <img src={modalHogwarts} alt="Imagem do modal" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
