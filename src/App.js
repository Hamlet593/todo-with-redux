import './App.css';
import './wrapper.css';
import {useState} from 'react';
import TodoList from './TodoList';
import Todoform from './TodoForm';
import Todofooter from './TodoFooter';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn JS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'Learn CSS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'Learn React',
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <div className='wrapper'>
        <h1>todos</h1>
        <Todoform onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
           }
          ])
        }} />
        <TodoList todos={todos}/>
        <Todofooter />
      </div>
    </div>
  );
}

export default App;