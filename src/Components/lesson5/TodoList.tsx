import React, { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import TodoListItem from './TodoListItem';

type TodoItem = {
  text: string;
  id: number;
  isDone: boolean;
};

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>(
    JSON.parse(localStorage.getItem('todoList') || '[]')
  );
  const [todo, setTodo] = useState<string>('');
  const [editItem, setEditItem] = useState<TodoItem | null>(null);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  console.log(todoList, 'todoList zemot');

  const addTodo = () => {
    if (todo) {
      setTodoList([
        ...todoList,
        {
          text: todo,
          id: Math.floor((1 + Math.random()) * 0x10000),
          isDone: false,
        },
      ]);
      setTodo('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (editItem) {
      saveItem(editItem);
      return;
    } else {
      addTodo();
    }
  };

  const removeTodo = (itemToRemove: TodoItem) => {
    const updatedTodoList = todoList.filter((item) => item.id !== itemToRemove.id);

    setTodoList(updatedTodoList);
  };

  const doneTodo = (itemDone: TodoItem) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === itemDone.id ? { ...item, isDone: true } : item
    );

    setTodoList(updatedTodoList);
  };

  const editTodo = (itemEdit: TodoItem) => {
    setTodo(itemEdit.text);
    setEditItem(itemEdit);
  };

  const saveItem = (itemSave: TodoItem) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === itemSave.id ? { ...item, text: todo } : item
    );
    console.log('updatedTodoList', { updatedTodoList });

    setTodoList(updatedTodoList);
    setEditItem(null);
    setTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Note' value={todo} onChange={handleInputChange} />
        <button onClick={handleSubmit}> {editItem ? 'save' : 'add'}</button>
      </form>

      <TodoListItem
        list={todoList}
        doneTodo={doneTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoList;
