import classes from './Label.module.css';

const Label = (props) => {
  return (
    <label className={classes.label} {...props}>
      {props.children}
    </label>
  );
};

export default Label;
