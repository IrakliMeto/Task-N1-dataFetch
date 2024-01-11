import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import UserSearch from './UserSearch';

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <UserSearch />

      {user?.name && (
        <ul>
          <li>Name: {user?.name}</li>
          <li>
            <img src={user?.avatar_url} alt='' />
          </li>
          <li>Company: {user?.company}</li>
          <li>Location: {user?.location}</li>
        </ul>
      )}
    </div>
  );
}
