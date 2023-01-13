import PropTypes from 'prop-types';
import css from './Sections.module.css';

export default function Section({ title, children }) {
  return (
    <section className={css.sections}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
