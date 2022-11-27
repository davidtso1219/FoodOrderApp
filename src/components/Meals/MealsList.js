import Meal from "./Meal/Meal";

import styles from "./MealsList.module.css";

const MealsList = (props) => {
  const meals = props.meals.map((meal) => (
    <Meal key={meal.id} meal={meal}></Meal>
  ));

  return (
    <ul className={styles["meals-list"]}>
      {meals}
    </ul>
  );
};

export default MealsList;
