import { useTheme } from 'styled-components'

import {
  Container,
  Content,
  Span,
  Title,
  SubTitle,
  Tag,
  Symbol,
  SpanOfTag,
  ContainerButtons,
  IconPencil,
  LabelForButton,
  LabelForButtonWhite,
  IconTrash,
  ButtonEdit,
  ButtonTrash,
  ContainerData
} from './styled'

import { DefaultTitleHeader } from '../../components/DefaultTitleHeader'

import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import { Alert, TouchableOpacityProps } from 'react-native'
import { useCallback, useState } from 'react'
import { getMealById } from '../../storage/meal/getMealByID'
import { MealDTO } from '../../storage/meal/mealStorageDTO'
import { removeMealByMealId } from '../../storage/meal/deleteMeal'

type RouteParams = {
  mealId: string
  inDiet: boolean
}

export function Meal() {

  const theme = useTheme()

  const route = useRoute()

  const navigation = useNavigation()

  const { mealId, inDiet } = route.params as RouteParams

  const [mealRecoverData, setMealRecoverData] = useState<MealDTO>()

  async function mealRemove() {
    console.log('tentando remover esse item ' + mealId)
    try {
      await removeMealByMealId(mealId)
    } catch (err) {
      console.error(err)
    }
    navigation.navigate('home')
  }

  function handleDeleteItem() {
    Alert.alert('', 'Deseja realmente escluir o registro da refeição?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sim, excluir', onPress: () => mealRemove() }
    ])
  }

  function handleNavigateToEditMeal() {
    return navigation.navigate('editMeal', {
      mealId,
      name: mealRecoverData?.name ?? '',
      description: mealRecoverData?.description ?? '',
      date: mealRecoverData?.date ?? '',
      hour: mealRecoverData?.hour ?? '',
      isInDiet: mealRecoverData?.inDiet === 1 ?? false
    })
  }

  async function fetchMealData() {
    try {
      const mealData = await getMealById(mealId)
      setMealRecoverData(mealData)
    } catch (err) {
      console.error(err)
    }
  }




  useFocusEffect(useCallback(() => {
    fetchMealData()

  }, []))

  return (
    <Container style={{ backgroundColor: inDiet ? theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT }}>
      <DefaultTitleHeader title="Refeição" />
      <Content>
        <ContainerData>
          <Title>{mealRecoverData?.name}</Title>
          <Span>{mealRecoverData?.description}</Span>
          <SubTitle>Data e Hora</SubTitle>
          <Span>{mealRecoverData?.date} às {mealRecoverData?.hour}</Span>
          <Tag>
            <Symbol style={{
              backgroundColor: inDiet ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK
            }} />
            <SpanOfTag>
              {
                inDiet ? 'dentro da dieta' : 'fora da dieta'
              }
            </SpanOfTag>
          </Tag>
        </ContainerData>
        <ContainerButtons>
          <ButtonEdit onPress={handleNavigateToEditMeal}>
            <IconPencil />
            <LabelForButtonWhite>Editar refeição</LabelForButtonWhite>
          </ButtonEdit>
          <ButtonTrash onPress={handleDeleteItem}>
            <IconTrash />
            <LabelForButton>Excluir refeição</LabelForButton>
          </ButtonTrash>
        </ContainerButtons>
      </Content>
    </Container>
  )
}