import PropTypes from 'prop-types';
import css from './Transitions.module.css';

export default function CreateTransTabel({ id, type, amount, currency }) {
  return (
    <>
      <td className={css.about}>{type}</td>
      <td className={css.about}>{amount}</td>
      <td className={css.about}>{currency}</td>
    </>
  );
}
CreateTransTabel.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}