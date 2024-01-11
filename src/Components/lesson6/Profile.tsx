import React, { useState } from 'react';

export default function Profile() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState<any>(null);

  const userDataHandler = (e: any) => {
    setUserName(e.target.value);
  };

  const userSubmitHandler = (e: any) => {
    e.preventDefault();

    if (!userName) return;

    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        console.log('datA:', data);
        setUser(data);
      });
  };

  console.log(user, ' user');

  return (
    <form className='search-user' onSubmit={userSubmitHandler}>
      <input
        placeholder='Search Github User'
        type='text'
        value={userName}
        onChange={userDataHandler}
      />
      <button type='submit'>Search</button>

      <div>
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
    </form>
  );
}
