import { useTheme } from "styled-components"
import { Container, Content } from "./styled"
import { DefaultTitleHeader } from "../../components/DefaultTitleHeader"

export function Meal() {
  const theme = useTheme()

  return (
    <Container style={{ backgroundColor: theme.COLORS.BASE.GRAY_5 }}>
      <DefaultTitleHeader title="Refeição" />
      <Content>

      </Content>
    </Container>
  )
}