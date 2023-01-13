import PropTypes from 'prop-types';
import css from './Statistic.module.css';


export default function StatElementCreate({ id, label, percentage }) {
  return (
    <>
      <span className={css.label}>{label}:</span>
      <span className={css.percentage}>{percentage}</span>
    </>
  );
}

StatElementCreate.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}
