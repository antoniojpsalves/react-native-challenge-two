import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { MealDTO } from './mealStorageDTO'
import { mealsGetAll } from './getAllMeals'


export async function getMealById(mealId: string) {
  try {
    const storedMeals = await mealsGetAll()

    const mealToEdit = storedMeals.find(meal => meal.mealId === mealId)

    return mealToEdit
  } catch (err) {
    throw err
  }
}