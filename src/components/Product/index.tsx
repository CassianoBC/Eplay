import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.it/222x250" alt="Nome do Jogo" />
      <Titulo>Nome do Jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        explicabo ducimus doloremque? Odio minima omnis sequi sapiente et.
        Voluptate, quis recusandae atque et dignissimos aut praesentium
        voluptatem perferendis ratione eligendi.
      </Descricao>
    </Card>
  )
}

export default Product
