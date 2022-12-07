import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      style={props.width && `width: ${props.width}`}
    >
      {props.title && <h1 className={classes['card__title']}>{props.title}</h1>}
      {props.children}
    </div>
  );
};

export default Card;
