import { FunctionComponent } from 'react'
import { Feed } from '../../modules/Feed'
import { Column, Container, Content } from './Home.styles'

export const Home: FunctionComponent = () => (
  <Container>
    <Column />
    <Content>
      <Feed />
    </Content>
    <Column />
  </Container>
)
