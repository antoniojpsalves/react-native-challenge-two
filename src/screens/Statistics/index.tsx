import { useTheme } from "styled-components"
import { BackButton, BackIcon, Container, Content, HeaderWrapper } from "./styled"
import { useNavigation, useRoute } from "@react-navigation/native"
import { DisplayStatisticInfo } from "../../components/DisplayStatisticInfo"


type RouteParams = {
  status: boolean
  percent: number
}

export function Statistics() {

  const route = useRoute()

  const { status, percent } = route.params as RouteParams

  const theme = useTheme()

  const navigation = useNavigation()

  function handleGoBackHome() {
    return navigation.navigate('home')
  }


  return (
    <Container style={{ backgroundColor: status ? theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.RED_LIGHT }}>
      <HeaderWrapper>
        <BackButton onPress={handleGoBackHome}>
          <BackIcon style={{ color: status ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK }} />
        </BackButton>
        <DisplayStatisticInfo percent={percent} />
      </HeaderWrapper>
      <Content>

      </Content>
    </Container>
  )
}