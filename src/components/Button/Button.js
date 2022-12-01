import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`${classes.button} ${classes["button--" + props.type]} ${props.wider && classes["button--wider"]} ${
        props.className
      }`}
      onClick={!props.disabled && props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
