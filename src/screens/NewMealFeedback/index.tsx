import { useNavigation, useRoute } from "@react-navigation/native"
import { Container, Title, SpanText, BoldPhrase, Ilustration } from "./styled"

import positiveIlustration from '../../assets/positive-ilustration.png'
import negativeIlustration from '../../assets/negative-ilustration.png'
import { DefaultBlackButton } from "../../components/DefaultBlackButton"
import { useTheme } from "styled-components"

type RouteParams = {
  followingDiet: boolean
}


export function NewMealFeedBack() {

  const theme = useTheme()
  const route = useRoute()


  const { followingDiet } = route.params as RouteParams

  const informationContent = {
    title: followingDiet ? "Continue assim!" : "Que pena!",
    bold: followingDiet ? " dentro da dieta" : " saiu da dieta ",
    startPhrase: followingDiet ? "Você continua" : "Você",
    endPhrase: followingDiet ? ". Muito bem!" : "dessa vez, mas continue se esforçando e não desista!"
  }

  const navigation = useNavigation()

  function handleGoBackHome() {
    return navigation.navigate('home')
  }

  return (
    <Container>
      <Title style={{
        color: followingDiet ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.RED_DARK
      }}>
        {informationContent.title}
      </Title>
      <SpanText>
        {informationContent.startPhrase}
        <BoldPhrase>{informationContent.bold}</BoldPhrase>
        {informationContent.endPhrase}
      </SpanText>

      <Ilustration source={followingDiet ? positiveIlustration : negativeIlustration} />

      <DefaultBlackButton
        title="Ir para a página inicial"
        style={{
          height: 50,
          width: 192,
          paddingVertical: 16,
          paddingHorizontal: 24
        }}
        onPress={handleGoBackHome}
      />

    </Container>
  )
}