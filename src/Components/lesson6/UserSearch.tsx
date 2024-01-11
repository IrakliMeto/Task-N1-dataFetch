import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

export default function UserSearch() {
  const [userLogin, setUserLogin] = useState<string>('');

  const { setUser } = useContext(UserContext);

  const userSubmitHandler = (e: any) => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${userLogin}`)
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        console.log('datA:', data);
        setUser(data);
      });
  };

  return (
    <form onSubmit={userSubmitHandler}>
      <input
        placeholder='Search Github User'
        type='text'
        value={userLogin}
        onChange={(e) => setUserLogin(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
}
