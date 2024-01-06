import { useTheme } from 'styled-components'
import { DefaultTitleHeader } from '../../components/DefaultTitleHeader'
import { Container, Content } from './styled'
import { FormMeal } from '../../components/FormMeal'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'

type RouteParams = {
  mealId: string
  name: string
  description: string
  date: string
  hour: string
  isInDiet: boolean
}

export function EditMeal() {

  const theme = useTheme()
  const route = useRoute()

  const {
    mealId,
    name,
    description,
    date,
    hour,
    isInDiet,
  } = route.params as RouteParams


  return (
    <Container style={{ backgroundColor: theme.COLORS.BASE.GRAY_5 }}>
      <DefaultTitleHeader title="Editar refeição" />
      <Content>
        <FormMeal
          name={name}
          description={description}
          date={date}
          hour={hour}
          inDiet={isInDiet ? 1 : 2}
          mealId={mealId}
          edit
        />
      </Content>
    </Container>
  )
}