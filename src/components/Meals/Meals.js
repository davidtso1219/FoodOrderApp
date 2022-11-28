import MealsIntro from './MealIntro'
import MealsList from './MealsList'

const Meals = props => {
  return (
    <>
      <MealsIntro />
      <MealsList isLoading={props.isLoading} />
    </>
  );
}

export default Meals;
