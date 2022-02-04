import './todoitem.css';

const Todoitem = ({todo}) => {
    return (
        <div className="todoitem">
            <input type='checkbox'/>
            {todo.text}
            <button>X</button>
        </div>
    );
}

export default Todoitem;