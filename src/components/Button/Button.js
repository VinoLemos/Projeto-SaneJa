import classes from './Button.module.css';

const Button = (props) => {
  const wider = props.wider === 'true';

  return (
    <button
      type='button'
      className={`${classes.button} ${classes['button--' + props.type]} ${
        wider && classes['button--wider']
      } ${props.className}`}
      onClick={!props.disabled && props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
