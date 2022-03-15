import { FunctionComponent } from 'react'
import { Picture } from '../../atoms/Pictures'
import { Container, Author, Name, Date } from './PostHeader.styles'

export const PostHeader: FunctionComponent = () => (
  <Container>
    <Picture
      width="42"
      height="42"
      src="https://avatars.githubusercontent.com/u/10711649?v=4"
    />
    <Author>
      <Name>Alexandro Castro</Name>
      <Date>July 26 2018, 01:03pm</Date>
    </Author>
  </Container>
)
