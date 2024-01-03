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

import { TouchableOpacityProps } from 'react-native'

type RouteParams = {
  mealId: string
  inDiet: boolean
}

export function Meal() {
  const theme = useTheme()

  const route = useRoute()

  const { mealId, inDiet } = route.params as RouteParams

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
          <ButtonTrash>
            <IconTrash />
            <LabelForButton>Excluir refeição</LabelForButton>
          </ButtonTrash>
        </ContainerButtons>
      </Content>
    </Container>
  )
}