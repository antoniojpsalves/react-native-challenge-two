import { useTheme } from "styled-components"
import { DefaultTitleHeader } from "../../components/DefaultTitleHeader"
import { Container, Content } from "./styled"

export function NewMeal() {

  const theme = useTheme()

  return (
    <Container style={{ backgroundColor: theme.COLORS.BASE.GRAY_5 }}>
      <DefaultTitleHeader title="Nova Refeição" />
      <Content>

      </Content>
    </Container>
  )
}