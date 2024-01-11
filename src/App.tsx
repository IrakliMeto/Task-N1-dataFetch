import Card from './Components/lesson3/Card';
import Calculator from './Components/lesson4/Calculator';
import TodoList from './Components/lesson5/TodoList';
import Profile from './Components/lesson6/Profile';
import { UserProvider } from './Components/lesson6/UserContext';

function App() {
  return (
    <div>
      {/* <Card /> */}
      {/* <Calculator /> */}
      {/* <TodoList /> */}
      <UserProvider>
        <Profile />
      </UserProvider>
    </div>
  );
}

export default App;
