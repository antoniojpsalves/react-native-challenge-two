import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealDTO } from './mealStorageDTO'
import { AppError } from '../../utils/AppError'
import { MEAL_COLLECTION } from '../storageConfig'
import { mealsGetAll } from './getAllMeals'


export async function mealCreate(newMeal: MealDTO) {
  try {

    const storedMeals = await mealsGetAll()

    const mealAlreadyExists = storedMeals.includes(newMeal)

    if (mealAlreadyExists) {
      throw new AppError('Refeição já adicionada')
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([...storedMeals, newMeal]))

  } catch (error) {
    throw error
  }
}