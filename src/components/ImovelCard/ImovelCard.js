import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './ImovelCard.module.css';

function ImovelCard(props) {
  const imovel = props.imovel;

  const onDeleteHandler = () => {
    props.onDelete(imovel);
  }

  return (
    <Card className={classes['imovel-card']}>
      <h1 className={classes['imovel-card__title']}>Imóvel RGI: {imovel.rgi}</h1>
      <h2 className={classes['imovel-card__subtitle']}>Hidrômetro: {imovel.hidrometro}</h2>
      <p className={classes['imovel-card__text']}>{imovel.rua}, {imovel.numero}</p>
      <p className={classes['imovel-card__text']}>{imovel.bairro} - CEP: {imovel.cep.toString().slice(0, -3)+'-'+imovel.cep.toString().slice(-3)}</p>
      {imovel.complemento && <p className={classes['imovel-card__text']}>{imovel.complemento}</p>}
      <p className={classes['imovel-card__text']}>{imovel.cidade}, {imovel.estado}</p>
      <div className={classes['imovel-card__controls']}>
        <Link to={imovel.id.toString()}>
          <Button>Alterar</Button>
        </Link>
        <Button type="danger" onClick={onDeleteHandler}>Excluir</Button>
      </div>
    </Card>
  );
}

export default ImovelCard;