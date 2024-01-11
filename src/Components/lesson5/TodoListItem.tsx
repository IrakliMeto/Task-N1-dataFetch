import React from 'react';
import styles from './style.module.css';
import TodoItem from './TodoList';

type TodoItem = {
  text: string;
  id: number;
  isDone: boolean;
};

type TodoListProps = {
  list: TodoItem[];
  doneTodo: (itemDone: TodoItem) => void;
  removeTodo: (itemToRemove: TodoItem) => void;
  editTodo: (itemEdit: TodoItem) => void;
};

const TodoListItem: React.FC<TodoListProps> = ({ list, doneTodo, removeTodo, editTodo }) => {
  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <div className={`${styles.item} ${item.isDone ? styles.done : ''}`}>
            {item.text}
            <button onClick={() => doneTodo(item)}>V</button>
            <button onClick={() => removeTodo(item)}>--</button>
            <button onClick={() => editTodo(item)}>...</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoListItem;
