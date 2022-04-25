import { Friend } from './Friend';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li class="item" key={friend.id}>
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
