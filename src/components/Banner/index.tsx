import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url('${bannerImg}')` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 e PS5</Titulo>
          <Precos>
            De <span>R$ 299,99</span> <br /> por R$ 199,99
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveiras a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
