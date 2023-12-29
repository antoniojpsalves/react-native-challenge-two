import { Container, DefaultContainer, DefaultMainNumber, DefaultMainText, DoubleContainer, InDietContainer, MainTitle, OutDietContainer } from './styled'

interface GeneralStatisticsProps {
  bestSequence: number
  countRegisters: number
  amountInDiet: number
  amountOutDiet: number
}


export function GeneralStatisticDisplay({ bestSequence, countRegisters, amountInDiet, amountOutDiet }: GeneralStatisticsProps) {
  return (
    <Container>
      <MainTitle>Estatísticas gerais</MainTitle>
      <DefaultContainer>
        <DefaultMainNumber>{bestSequence}</DefaultMainNumber>
        <DefaultMainText>melhor sequencia de pratos dentro da dieta</DefaultMainText>
      </DefaultContainer>
      <DefaultContainer>
        <DefaultMainNumber>{countRegisters}</DefaultMainNumber>
        <DefaultMainText>refeições registradas</DefaultMainText>
      </DefaultContainer>
      <DoubleContainer>
        <InDietContainer>
          <DefaultMainNumber>{amountInDiet}</DefaultMainNumber>
          <DefaultMainText>refeições dentro da dieta</DefaultMainText>
        </InDietContainer>
        <OutDietContainer>
          <DefaultMainNumber>{amountOutDiet}</DefaultMainNumber>
          <DefaultMainText>refeições fora da dieta</DefaultMainText>
        </OutDietContainer>
      </DoubleContainer>
    </Container>
  )
}