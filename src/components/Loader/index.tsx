import { PacmanLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

export default function Loader() {
  return (
    <Container>
      <PacmanLoader color={colors.white} />
    </Container>
  )
}
