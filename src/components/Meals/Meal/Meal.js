import MealDescription from "./MealDescription";
import MealForm from "./MealForm";

import styles from "./Meal.module.css";

const Meal = (props) => {
  const meal = props.meal;

  return (
    <li className={styles.meal}>
      <MealDescription meal={meal} />
      <MealForm meal={meal}/>
    </li>
  );
};

export default Meal;
