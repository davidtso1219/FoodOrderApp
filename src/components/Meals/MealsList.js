import { useState, useEffect } from 'react';

import Meal from "./Meal/Meal";

import Card from "../UI/Card";

import useHttp from "../../hooks/useHttp";

import styles from "./MealsList.module.css";

const MealsList = (props) => {

  const { isLoading, error, sendRequest } = useHttp();
  const [meals, setMeals] = useState([]);

  const mealsDataHandler = (mealsData) => {
    const loadedMeals = [];
    for (let key in mealsData) {
      let meal = mealsData[key];

      loadedMeals.push({
        ...meal,
        id: key
      });
    }
    setMeals(loadedMeals);
  };

  useEffect(() => {
    sendRequest(
      {
        url: "https://foodorderapp-e4f21-default-rtdb.firebaseio.com/meals.json",
        headers: { "Content-Type": "application/json" },
      },
      mealsDataHandler
    );
  }, [sendRequest]);

  const mealComponents = meals.map((meal) => (
    <Meal key={meal.id} meal={meal}></Meal>
  ));

  const content = error ? (
    <h2>Something went wrong</h2>
  ) : isLoading ? (
    <h2>Fetching Meals</h2>
  ) : meals.length === 0 ? (
    <h2>No Meals Available</h2>
  ) : (
    <ul className={styles.ul}>{mealComponents}</ul>
  );

  return (
    <Card className={styles.card}>
      {content}
    </Card>
  );
};

export default MealsList;
