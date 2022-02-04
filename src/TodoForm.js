import { useState } from "react";

const Todoform = ({onAdd}) => {

    const [text, setText] = useState('');
    
    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
            onAdd(text);
            setText('');
        }}>
            <input type='text' placeholder='What needs to be done ?' value={text} onChange={evt => {
                setText(evt.target.value)
            }}/>
            <button>Add</button>
        </form>
    );
}

export default Todoform;