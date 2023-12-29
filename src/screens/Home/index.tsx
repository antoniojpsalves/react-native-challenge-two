import { HomeHeader } from "../../components/HomeHeader"
import { NewMealComponent } from "../../components/NewMealComponent"
import { StatisticCard } from "../../components/StatisticCard"
import { Container } from "./styled"


export function Home() {
  return (
    <Container>
      <HomeHeader />
      <StatisticCard percent={90.86} phrase="das refeições dentro da dieta" statusDiet />
      <NewMealComponent />
    </Container>
  )
}