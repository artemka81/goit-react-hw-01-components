import { Friend } from './Friend';
import s from './Friends.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <Friend
            status={friend.isOnline}
            name={friend.name}
            avatar={friend.avatar}
          />
        </li>
      ))}
    </ul>
  );
};
