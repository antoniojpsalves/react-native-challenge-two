import { useNavigation } from '@react-navigation/native'
import { Container, Title, Button, Icon, LabelForButton } from './styled'


export function NewMealComponent() {

  const navigation = useNavigation()

  function handleGoToNewMeal() {
    return navigation.navigate('newMeal')
  }

  return (
    <Container>
      <Title>Refeições</Title>
      <Button onPress={handleGoToNewMeal}>
        <Icon />
        <LabelForButton>Nova refeição</LabelForButton>
      </Button>
    </Container>
  )
}