// import Card from './Components/lesson3/Card';
import Calculator from './Components/lesson4/Calculator';
import TodoList from './Components/lesson5/TodoList';
import Profile from './Components/lesson6/Profile';
import { UserProvider } from './Components/lesson6/UserContext';
import MyForm from './Components/lesson7/Form';
import Card from './Components/lesson7/Card';
import './App.css';

function App() {
  return (
    <div>
      {/* <Card /> */}
      {/* <Calculator /> */}
      {/* <TodoList /> */}
      {/* <UserProvider>
        <Profile />
      </UserProvider> */}
      {/* <MyForm /> */}

      <div className='parent'>
        Parent
        <div className='child'>child 1</div>
        <div className='child'>child 2</div>
        <div className='child'>child 3</div>
      </div>
    </div>
  );
}

export default App;
