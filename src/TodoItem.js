import './todoitem.css';

const Todoitem = ({todo, onChange,onDelete}) => {
    return (
        <div className="todoitem">
            <input type='checkbox' onChange={evt => {
                onChange({
                    ...todo,
                    isCompleted: evt.target.checked,
                })
            }}/>
            {todo.text}
            <button onClick={() => {
                onDelete(todo)
            }}>X</button>
        </div>
    );
}

export default Todoitem;