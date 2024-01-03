export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        status: boolean;
        percent: number;
      }
      newMeal: undefined;
      addNewMealFeedback: {
        followingDiet: boolean;
      }
      meal: {
        mealId: string;
        inDiet: boolean;
      }
      editMeal: {
        mealId: string;
      }
    }
  }
}