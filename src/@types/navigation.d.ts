export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        status: boolean;
        percent: number;
        inDietMealCount: number;
        amountMealCount: number;
        outOfDietMealCount: number;
        bestSequence: number;
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
        name: string;
        description: string;
        date: string;
        hour: string;
        isInDiet: boolean;
      }
    }
  }
}