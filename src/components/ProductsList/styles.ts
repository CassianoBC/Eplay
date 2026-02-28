import styled from 'styled-components'

import { Props } from '.'
import { breackpoints, cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) => {
    return props.background === 'black' ? cores.preto : cores.cinza
  }};

  ${Card} {
    background-color: ${(props) => {
      return props.background === 'black' ? cores.cinza : cores.preto
    }};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breackpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breackpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
