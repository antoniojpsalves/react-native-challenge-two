import { useNavigation } from '@react-navigation/native'

import { Container, HourDisplay, Divisor, DescriptionDisplay, MealInfoWrapper, CircleSymbol } from './styled'

import { TouchableOpacityProps } from 'react-native'

type ItemListComponentProps = TouchableOpacityProps & {
  mealId: string
  hour: string
  description: string
  status: boolean
}

export function ItemListComponent({ mealId, hour, description, status, ...rest }: ItemListComponentProps) {

  const navigation = useNavigation()

  function handleGoToMealDetails(mealId: string, status: boolean) {
    return navigation.navigate('meal', { mealId, inDiet: status })
  }

  return (
    <Container
      {...rest}
      onPress={() => handleGoToMealDetails(mealId, status)}
    >
      <HourDisplay>{hour}</HourDisplay>
      <Divisor />
      <MealInfoWrapper>
        <DescriptionDisplay>{description}</DescriptionDisplay>
        <CircleSymbol status={status} />
      </MealInfoWrapper>
    </Container>
  )
}