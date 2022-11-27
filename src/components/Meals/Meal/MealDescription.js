import styles from './MealDescription.module.css';

const MealDescription = (props) => {
  const meal = props.meal;

  return (
    <div className={styles.description}>
      <div>
        <b>{meal.name}</b>
      </div>
      <div>
        <i>{meal.description}</i>
      </div>
      <div className={styles.price}>
        <b>${meal.price}</b>
      </div>
    </div>
  );
};

export default MealDescription;