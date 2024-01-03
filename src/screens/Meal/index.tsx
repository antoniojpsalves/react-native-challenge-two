import { useTheme } from "styled-components"
import { Container, Content } from "./styled"
import { DefaultTitleHeader } from "../../components/DefaultTitleHeader"
import { useRoute } from "@react-navigation/native"

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

      </Content>
    </Container>
  )
}