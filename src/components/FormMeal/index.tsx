import { useState } from 'react'
import uuid from 'react-native-uuid'

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
import { DefaultBlackButton } from '../DefaultBlackButton'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { mealCreate } from '../../storage/meal/createMeal'
import { AppError } from '../../utils/AppError'
import { Alert } from 'react-native'
import { mealsGetAll } from '../../storage/meal/getAllMeals'
import { updateMeals } from '../../storage/meal/updateMeals'

interface FormMeal {
  name?: string
  description?: string
  date?: string
  hour?: string
  inDiet?: number
  edit?: boolean
  mealId?: string
}

export function FormMeal({
  name = undefined,
  description = undefined,
  date = undefined,
  hour = undefined,
  inDiet = 0,
  edit = false,
  mealId = ''
}: FormMeal) {

  const theme = useTheme()
  const navigation = useNavigation()

  const [mealName, setMealName] = useState(name ?? '')
  const [mealDescription, setMealDescription] = useState(description ?? '')
  const [mealDate, setMealDate] = useState(date ?? '')
  const [mealHour, setMealHour] = useState(hour ?? '')
  const [mealInDiet, setMealInDiet] = useState(inDiet)


  function handleSelectMealInDiet(state: number) {
    return setMealInDiet(state)
  }



  async function handleGoToNewMealFeedBack() {

    const newMeal = {
      mealId: uuid.v4().toString(),
      name: mealName,
      description: mealDescription,
      date: mealDate,
      hour: mealHour,
      inDiet: mealInDiet
    }

    try {
      await mealCreate(newMeal)
    } catch (err) {
      console.error(err)
      if (err instanceof AppError) {
        Alert.alert('Criar refeição', err.message)
      } else {
        Alert.alert('Criar refeição', 'Não foi possível criar a refeição.')
      }
    }

    // Salvar e nover para a tela de feedback
    return navigation.navigate('addNewMealFeedback', { followingDiet: mealInDiet === 1 })
  }

  async function editInfo(mealId: string) {
    try {
      const storedData = await mealsGetAll()
      const alteredData = storedData.map((meal) => {
        if (meal.mealId === mealId) {
          meal.name = mealName
          meal.description = mealDescription
          meal.date = mealDate
          meal.hour = mealHour
          meal.inDiet = mealInDiet
        }
        return meal
      })
      updateMeals(alteredData)
      navigation.navigate('home')
    } catch (err) {
      console.log(err)
    }
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
      <DefaultBlackButton
        title={edit ? 'Salvar alterações' : 'Cadastrar refeição'}
        onPress={() => {
          edit ? editInfo(mealId) : handleGoToNewMealFeedBack()
        }}
      />
    </Container>
  )

}