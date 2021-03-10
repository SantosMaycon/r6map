import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      consequuntur doloribus labore optio ex, id provident dolorum, consequatur
      ab recusandae repellat quae. Blanditiis quisquam atque explicabo
      asperiores sequi, consectetur odit. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Porro illo dolore, accusantium repellendus architecto
      odio necessitatibus excepturi numquam, repudiandae aperiam ratione
      voluptatibus? Minus quaerat ullam molestiae ab optio quos incidunt.
    </S.Body>
  </S.Content>
)

export default AboutTemplate
