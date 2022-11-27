import styles from './MealIntro.module.css';
import Card from '../UI/Card';

const MealIntro = () => {
  return (
    <Card className={styles.intro}>
      <h1>Delicious Food, Delievered To You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by expereienced chefs!
      </p>
    </Card>
  );
};

export default MealIntro;
