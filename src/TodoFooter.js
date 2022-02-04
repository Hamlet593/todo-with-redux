const Todofooter = ({todos, onClearCopmpleted}) => {

    const completedSize = todos.filter(todo => todo.isCompleted).length

    return (
        <div>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={evt => {
                onClearCopmpleted()
            }}>Clear Completed</button>
        </div>
    );
}

export default Todofooter;