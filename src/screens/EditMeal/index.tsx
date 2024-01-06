import { useTheme } from "styled-components"
import { DefaultTitleHeader } from "../../components/DefaultTitleHeader"
import { Container, Content } from "./styled"
import { FormMeal } from "../../components/FormMeal"
import { useRoute } from "@react-navigation/native"
import { useState } from "react"

type RouteParams = {
  mealID: string
}

export function EditMeal() {

  const theme = useTheme()
  const route = useRoute()

  const { mealID } = route.params as RouteParams


  //capturar as informações da refeição específica
  async function getMealData(id: string) {

  }

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [inDiet, setInDiet] = useState()

  return (
    <Container style={{ backgroundColor: theme.COLORS.BASE.GRAY_5 }}>
      <DefaultTitleHeader title="Editar refeição" />
      <Content>
        <FormMeal
          name={name}
          description={description}
          date={date}
          hour={hour}
          inDiet={inDiet}
          edit
        />
      </Content>
    </Container>
  )
}