import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { StatisticsList } from './statistics/StatisticsList';
import { FriendList } from './friendList/FriendList';
import { Friend } from './friendList/Friend';
import user from '../date/user.json';
import data from '../date/data.json';
import friends from '../date/friends.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}>
        <StatisticsList stats={data} />
      </Statistics>
      <Statistics stats={data}>
        <StatisticsList stats={data} />
      </Statistics>
      <FriendList friends={friends} />
    </div>
  );
};
