import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Statistics } from '../screens/Statistics'
import { NewMeal } from '../screens/NewMeal'
import { NewMealFeedBack } from '../screens/NewMealFeedback'
import { Meal } from '../screens/Meal'
import { EditMeal } from '../screens/EditMeal'

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='statistics'
        component={Statistics}
      />
      <Screen
        name='newMeal'
        component={NewMeal}
      />
      <Screen
        name='addNewMealFeedback'
        component={NewMealFeedBack}
      />
      <Screen
        name='meal'
        component={Meal}
      />
      <Screen
        name='editMeal'
        component={EditMeal}
      />
    </Navigator>
  )
}