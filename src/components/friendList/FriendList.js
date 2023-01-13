import AboutFriend from './Friend';
import css from './Friend.module.css';

export default function createFriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.item}>
          <AboutFriend
            id={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
