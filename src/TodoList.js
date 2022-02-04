import TodoItem from './TodoItem';
import './todolist.css';

const Todolist = ({todos, onChange, onDelete}) => {
    return (
        <div className='todolist'>
            {
                todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    );
}

export default Todolist;