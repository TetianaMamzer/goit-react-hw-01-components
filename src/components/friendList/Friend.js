import PropTypes from 'prop-types';
import css from './Friend.module.css';

export default function AboutFriend({ id, isOnline, avatar, name }) {
  return (
    <>
      <span className={css.status}>{isOnline ? '☘️' : '🍎'}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

AboutFriend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}


