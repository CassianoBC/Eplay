import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url('${bannerImg}')` }}>
      <div className="container">
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 e PS5</Titulo>
        <Precos>
          De <span>R$ 299,99</span> <br /> por R$ 199,99
        </Precos>
      </div>
    </Imagem>
  )
}

export default Banner
