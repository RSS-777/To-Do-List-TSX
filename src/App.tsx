import { FC, useState, useEffect, useRef, ChangeEventHandler } from 'react';
import { ITodo } from './types/data';
import { TodoList } from './components/TodoList';
import './App.css';

const App: FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    setTodos([...todos, {
      id: Date.now(),
      title: value,
      complete: false
    }])
    setValue('')
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        complete: !todo.complete
      }
    }))
  };

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <main>
      <h1>List To-Do (React-TSX)</h1>
      <div className='add-todo-block'>
        <input
          value={value}
          onChange={handleChange}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList
        items={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </main>
  );
}

export default App;
