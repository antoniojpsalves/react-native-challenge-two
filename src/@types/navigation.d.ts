export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: undefined;
      addNewMealFeedback: {
        followingDiet: boolean;
      }
      meal: {
        mealId: string;
      }
      editMeal: {
        mealId: string;
      }
    }
  }
}