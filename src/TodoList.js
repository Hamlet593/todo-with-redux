import TodoItem from './TodoItem';
import './todolist.css';

const Todolist = ({todos}) => {
    return (
        <div className='todolist'>
            {
                todos.map(todo => {
                    return (
                        <TodoItem key={todo.id} todo={todo}/>
                    )
                })
            }
        </div>
    );
}

export default Todolist;