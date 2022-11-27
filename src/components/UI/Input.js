import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={`${props.className} ${styles.input}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} {...props.input} />
    </div>
  );
};

export default Input;
