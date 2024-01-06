import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '../storageConfig'

import { mealGetAll } from './getAllMeals'

export async function removeMealByMealId(mealId: string) {

  try {
    const mealStored = await mealGetAll()

    const mealsFiltereds = mealStored.filter(m => m.mealId !== mealId)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsFiltereds))

  } catch (err) {
    throw err
  }

}