import Profile from './profile/Profile';
import Section from './sections/Section';
import FriendList from './friendList/FriendList';
import StatisticList from './statistics/StatisticList';
import Transactions from './transitions/TransactionsTable';

import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendList/friends.json';
import transactions from './transitions/transactions.json';

import '../index.css';

export default function App() {
  return (
    <div>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Upload stats">
        <StatisticList stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <Transactions items={transactions} />
      </Section>
    </div>
  );
}
