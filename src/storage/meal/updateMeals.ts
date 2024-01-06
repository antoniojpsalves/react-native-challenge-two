import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { MealDTO } from './mealStorageDTO'


export async function updateMeals(mealsUpdated: MealDTO[]) {
  try {
    AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsUpdated))
  } catch (err) {
    throw err
  }
}