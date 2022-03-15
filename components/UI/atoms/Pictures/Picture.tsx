import { FunctionComponent } from 'react'
import { Container } from './Picture.styles'
import Image, { ImageProps } from 'next/image'

export const Picture: FunctionComponent<ImageProps> = (props) => {
  return (
    <Container>
      <Image alt={props.alt || ''} {...props} />
    </Container>
  )
}
