import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { MealDTO } from './mealStorageDTO'

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    // AsyncStorage.removeItem(MEAL_COLLECTION)

    const meals: MealDTO[] = storage ? JSON.parse(storage) : []

    return meals

  } catch (err) {
    throw err
  }
}

export interface FormatedData {
  title: string,
  data: [
    {
      mealId: string,
      name: string,
      hour: string,
      description: string,
      status: boolean,
    },
  ]
}

export async function formatingDataToSectionList() {

  let inDietMealCount = 0
  let amountMealCount = 0

  const resultado: FormatedData[] = []

  const meals = await mealsGetAll()

  meals.forEach(item => {
    amountMealCount += 1


    if (item.inDiet === 1)
      inDietMealCount += 1

    const dataExistente = resultado.find(data => data.title === item.date)

    if (dataExistente) {
      dataExistente.data.push({
        mealId: item.mealId,
        name: item.name,
        hour: item.hour,
        description: item.description,
        status: item.inDiet === 1
      })
    } else {

      const novaData: FormatedData = {
        title: item.date,
        data: [
          {
            mealId: item.mealId,
            name: item.name,
            hour: item.hour,
            description: item.description,
            status: item.inDiet === 1
          }
        ]
      }
      resultado.push(novaData)
    }

  })

  return { resultado, inDietMealCount, amountMealCount }
}