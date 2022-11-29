import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${classes["button--" + props.type]} ${
        props.className
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
