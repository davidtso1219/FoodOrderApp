import mealsImage from "../../assets/meals.jpeg";
import HeaderButton from "./HeaderButton";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>David Meals</h1>
        <HeaderButton onClick={props.onHeaderBtnClick}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious foods" />
      </div>
    </>
  );
};

export default Header;
