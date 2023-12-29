import { useTheme } from "styled-components"

import { Container, Content } from "./styled"

import { DefaultTitleHeader } from "../../components/DefaultTitleHeader"
import { FormMeal } from "../../components/FormMeal"

export function NewMeal() {

  const theme = useTheme()

  return (
    <Container style={{ backgroundColor: theme.COLORS.BASE.GRAY_5 }}>
      <DefaultTitleHeader title="Nova Refeição" />
      <Content>
        <FormMeal />
      </Content>
    </Container>
  )
}