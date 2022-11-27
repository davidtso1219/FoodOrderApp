import MealsIntro from './MealIntro'
import MealsList from './MealsList'

const Meals = props => {
  return (
    <>
      <MealsIntro />
      <MealsList meals={props.meals}></MealsList>
    </>
  );
}

export default Meals;
