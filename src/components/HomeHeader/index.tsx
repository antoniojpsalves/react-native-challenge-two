import { Container, Logo, User } from './styled'
import LogoImg from '../../assets/logo.png'
import userImg from '../../assets/user.png'


export function HomeHeader() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <User source={userImg} />
    </Container>
  )
}