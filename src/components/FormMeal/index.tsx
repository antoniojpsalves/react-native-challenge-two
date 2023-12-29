import { useState } from 'react'

import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Container,
  DefaultLabel,
  DefaultTextInput,
  DefaultTextArea,
  RowWrapper,
  RowItem,
  DefaultButton,
  DefaultButtonText,
  ButtonIconNo,
  ButtonIconYes
} from './styled'
import { DefaultBlackButton } from '../DefaultBlackButton';
import { useTheme } from 'styled-components';

interface FormMeal {
  name?: string
  description?: string
  date?: string
  hour?: string
  inDiet?: number
}

export function FormMeal({
  name = undefined,
  description = undefined,
  date = undefined,
  hour = undefined,
  inDiet = 0
}: FormMeal) {

  const theme = useTheme()

  const [mealName, setMealName] = useState(name ?? '')
  const [mealDescription, setMealDescription] = useState(description ?? '')
  const [mealDate, setMealDate] = useState(date ?? '')
  const [mealHour, setMealHour] = useState(hour ?? '')
  const [mealInDiet, setMealInDiet] = useState(inDiet)


  function handleSelectMealInDiet(state: number) {
    return setMealInDiet(state)
  }

  return (
    <Container>
      <DefaultLabel>Nome</DefaultLabel>
      <DefaultTextInput
        value={mealName}
        onChangeText={setMealName}
      />
      <DefaultLabel>Descrição</DefaultLabel>
      <DefaultTextArea
        multiline={true}
        numberOfLines={4}
        style={{ height: 120, textAlignVertical: 'top', }}
        value={mealDescription}
        onChangeText={setMealDescription}
      />
      <RowWrapper>
        <RowItem>
          <DefaultLabel>Data</DefaultLabel>
          <DefaultTextInput
            placeholder="29/12/2023"
            value={mealDate}
            onChangeText={setMealDate}
          />
        </RowItem>
        <RowItem>
          <DefaultLabel>Hora</DefaultLabel>
          <DefaultTextInput
            placeholder="18h00"
            value={mealHour}
            onChangeText={setMealHour}
          />
        </RowItem>
      </RowWrapper>
      <DefaultLabel>Está dentro da dieta?</DefaultLabel>
      <RowWrapper>
        <DefaultButton
          style={mealInDiet === 1 && {
            backgroundColor: theme.COLORS.PRODUCT.GREEN_LIGHT,
            borderWidth: 1,
            borderColor: theme.COLORS.PRODUCT.GREEN_DARK
          }}
          onPress={() => handleSelectMealInDiet(1)}
        >
          <ButtonIconYes />
          <DefaultButtonText>Sim</DefaultButtonText>
        </DefaultButton>
        <DefaultButton
          style={mealInDiet === 2 && {
            backgroundColor: theme.COLORS.PRODUCT.RED_LIGHT,
            borderWidth: 1,
            borderColor: theme.COLORS.PRODUCT.RED_DARK
          }}
          onPress={() => handleSelectMealInDiet(2)}
        >
          <ButtonIconNo />
          <DefaultButtonText>Não</DefaultButtonText>
        </DefaultButton>
      </RowWrapper>
      <DefaultBlackButton title='Cadastrar refeição' />
    </Container>
  )

}