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

import { useRoute } from '@react-navigation/native'

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

  const { mealId, inDiet } = route.params as RouteParams


  async function mealRemove(mealId: string) {
    console.log('tentando remover esse item')
  }

  function handleDeleteItem(mealId: string) {
    Alert.alert('', 'Deseja realmente escluir o registro da refeição?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sim, excluir', onPress: () => mealRemove(mealId) }
    ])
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
          <ButtonEdit>
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