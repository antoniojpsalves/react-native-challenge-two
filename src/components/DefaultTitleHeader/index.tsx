import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, DefaultHeaderTitle } from './styled'


interface DefaultHeaderProps {
  title: string
}

export function DefaultTitleHeader({ title }: DefaultHeaderProps) {
  const navigation = useNavigation()

  function handleGoBackHome() {
    return navigation.navigate('home')
  }

  return (
    <Container>
      <BackButton onPress={handleGoBackHome}>
        <BackIcon />
      </BackButton>
      <DefaultHeaderTitle>{title}</DefaultHeaderTitle>
    </Container>
  )

}