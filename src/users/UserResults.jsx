import { useContext, useEffect } from 'react';
import Spinner from '../components/layout/Spinner';
import GithubContext from '../Context/Github/GithubContext';
import UserItem from './UserItem';

function UserResults() {
  const { users, loading } = useContext(GithubContext);


  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
