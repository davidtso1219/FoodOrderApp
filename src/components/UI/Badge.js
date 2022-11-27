import styles from './Badge.module.css';

const Badge = props => {
  return (
    <div className={`${props.className} ${styles[props.type]} ${styles.badge}`}>
      {props.children}
    </div>
  );
};

export default Badge;