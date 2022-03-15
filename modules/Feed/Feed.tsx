import { FunctionComponent } from 'react'
import { Post } from '../../components/UI/organisms/Post'
import { Container } from './Feed.styles'

export const Feed: FunctionComponent = () => {
  return (
    <Container>
      <Post></Post>
    </Container>
  )
}
