import Input from '../Input/Input';
import Label from '../Label/Label';
import classes from './FormGroup.module.css';

const FormGroup = (props) => {
  return (
    <div
      className={`${classes['form-group']} ${
        props.invalidIf ? classes['form-group--invalid'] : ''
      }`}
    >
      <Label className={classes['form-group__label']}>{props.label}</Label>
      {props.input && <Input {...props.input}></Input>}
      {props.children}
    </div>
  );
};

export default FormGroup;
