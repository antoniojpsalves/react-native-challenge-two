import { HomeHeader } from "../../components/HomeHeader"
import { StatisticCard } from "../../components/StatisticCard"
import { NewMealComponent } from "../../components/NewMealComponent"
import { Container } from "./styled"
import { SectionList } from "react-native";
import { ItemListComponent } from "../../components/ItemListComponent";
import { ListSessionTitle } from "../../components/ListSessionTitle";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { ListEmpty } from "../../components/ListEmpty";
import { useFocusEffect } from "@react-navigation/native";
import { FormatedData, formatingDataToSectionList } from "../../storage/meal/getAllMeals";


export function Home() {

  const fakeData = [
    {
      title: '2023-12-09',
      data: [
        {
          mealId: '1',
          hour: '20:00',
          description: 'X-tudo',
          status: false
        },
        {
          mealId: '2',
          hour: '21:00',
          description: 'X-salada',
          status: true
        },
        {
          mealId: '3',
          hour: '22:00',
          description: 'X-salada',
          status: false
        },
      ],
    },
    {
      title: '2023-12-10',
      data: [
        {
          mealId: '4',
          hour: '20:00',
          description: 'X-tudo',
          status: true
        },
        {
          mealId: '5',
          hour: '21:00',
          description: 'X-salada',
          status: true
        },
        {
          mealId: '6',
          hour: '22:00',
          description: 'X-salada',
          status: false
        },
      ],
    },
    {
      title: '2023-12-11',
      data: [
        {
          mealId: '7',
          hour: '20:00',
          description: 'X-tudo',
          status: false
        },
        {
          mealId: '8',
          hour: '21:00',
          description: 'X-salada',
          status: false
        },
        {
          mealId: '9',
          hour: '22:00',
          description: 'X-salada',
          status: false
        },
      ],
    },
    {
      title: '2023-12-12',
      data: [
        {
          mealId: '10',
          hour: '20:00',
          description: 'X-tudo',
          status: false
        },
        {
          mealId: '11',
          hour: '21:00',
          description: 'X-salada',
          status: false
        },
        {
          mealId: '12',
          hour: '22:00',
          description: 'X-salada',
          status: false
        },
      ],
    },
  ];

  const [isLoading, setIsLoading] = useState(false)

  const [mealList, setMealList] = useState<FormatedData[]>([])

  const [isFollowingDiet, setIsFollowingDiet] = useState(true)

  const [percent, setPercent] = useState(0)


  // statistic data

  const [inDietMeal, setInDietMeal] = useState(0)
  const [amountMeal, setAmountMeal] = useState(0)
  const [outOfDietMeal, setOutOfDietMeal] = useState(0)
  const [currentBesteSequence, SetCurrentBestSequence] = useState(0)


  async function fetchMeals() {
    try {
      setIsLoading(true)

      const {
        resultado,
        inDietMealCount,
        amountMealCount,
        outOfDietMealCount,
        bestSequence
      } = await formatingDataToSectionList()
      // tratar o data para que ele fique no formato esperado.

      setMealList(resultado)

      console.log('resultado length: ' + amountMealCount)
      console.log('inDietMealCount : ' + inDietMealCount)

      let percentCalculed = amountMealCount > 0 ? (inDietMealCount * 100) / amountMealCount : 0

      setPercent(parseFloat(percentCalculed.toFixed(2) ?? 0))

      //setting statistc data
      setInDietMeal(inDietMealCount)
      setAmountMeal(amountMealCount)
      setOutOfDietMeal(outOfDietMealCount)
      SetCurrentBestSequence(bestSequence)


    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // Para verificar a porcentagem e mudar os estilos
  useEffect(() => {
    setIsFollowingDiet(percent >= 50.0)
  }, [percent])


  useFocusEffect(useCallback(() => {
    // console.log('useFocusEffect carregou os dados')
    fetchMeals()
  }, []))

  return (
    <Container>
      <HomeHeader />
      <StatisticCard
        percent={percent}
        statusDiet={isFollowingDiet}
        inDietMealCount={inDietMeal}
        amountMealCount={amountMeal}
        outOfDietMealCount={outOfDietMeal}
        bestSequence={currentBesteSequence}
      />
      <NewMealComponent />

      {
        isLoading ? <Loading /> :
          <SectionList
            sections={mealList}
            keyExtractor={(item) => item.mealId}
            renderItem={({ item }) => (
              <ItemListComponent
                mealId={item.mealId}
                description={item.name}
                hour={item.hour}
                status={item.status}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <ListSessionTitle selectedDate={title} />
            )}
            style={{
              marginTop: 32
            }}
            contentContainerStyle={[
              { paddingBottom: 100 },
              mealList.length === 0 && { flex: 1 }
            ]}
            ListEmptyComponent={<ListEmpty message='Nenhuma refeição cadastrada, que tal começar?' />}
            showsVerticalScrollIndicator={false}
          />
      }

    </Container>
  )
}