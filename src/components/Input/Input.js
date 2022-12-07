import classes from './Input.module.css';

const Input = (props) => {
  return props.type !== 'textarea' ? (
    <input {...props} className={`${classes.input} ${props.className}`}></input>
  ) : (
    <textarea
      {...props}
      className={`${classes.input} ${props.className}`}
    ></textarea>
  );
};

export default Input;
