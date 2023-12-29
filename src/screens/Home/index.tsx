import { HomeHeader } from "../../components/HomeHeader"
import { StatisticCard } from "../../components/StatisticCard"
import { NewMealComponent } from "../../components/NewMealComponent"
import { ItemListComponent } from "../../components/ItemListComponent"
import { Container } from "./styled"


export function Home() {
  return (
    <Container>
      <HomeHeader />
      <StatisticCard percent={90.86} phrase="das refeições dentro da dieta" statusDiet />
      <NewMealComponent />

      {
        // just to see it
      }

      <ItemListComponent mealId="aaa" description="X-tudo" hour="20:00" status={false} />
      <ItemListComponent mealId="aaas" description="X-tudo" hour="20:00" status />
      <ItemListComponent mealId="aaassdsd" description="X-tudo" hour="20:00" status={false} />
      <ItemListComponent mealId="aaasxxsd" description="X-tudo" hour="20:00" status />
    </Container>
  )
}