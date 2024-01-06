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

import { useNavigation, useRoute } from '@react-navigation/native'

import { Alert, TouchableOpacityProps } from 'react-native'
import { useState } from 'react'

type RouteParams = {
  mealId: string
  inDiet: boolean
}

export function Meal() {

  const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme()

  const route = useRoute()

  const navigation = useNavigation()

  const { mealId, inDiet } = route.params as RouteParams


  async function mealRemove() {
    console.log('tentando remover esse item ' + mealId)
  }

  function handleDeleteItem() {
    Alert.alert('', 'Deseja realmente escluir o registro da refeição?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sim, excluir', onPress: () => mealRemove() }
    ])
  }

  function handleNavigateToEditMeal() {
    return navigation.navigate('editMeal', { mealId })
  }

  return (
    <Container style={{ backgroundColor: inDiet ? theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT }}>
      <DefaultTitleHeader title="Refeição" />
      <Content>
        <ContainerData>
          <Title>Sanduíche</Title>
          <Span>Sanduíche de pão integral com atum e salada de alface e tomate.</Span>
          <SubTitle>Data e Hora</SubTitle>
          <Span>12/08/2022 às 16h00</Span>
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