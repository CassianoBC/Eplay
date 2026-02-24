import Button from '../Button'

import starWars from '../../assets/images/star_wars.png'

import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'

export default function Cart() {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starWars} alt="Star Wars" />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS4</Tag>
              <p>R$ 125,00</p>
            </div>
          </CartItem>
          <CartItem>
            <img src={starWars} alt="Star Wars" />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS4</Tag>
              <p>R$ 125,00</p>
            </div>
          </CartItem>
        </ul>
        <Quantity>2 jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
