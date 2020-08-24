import React from 'react';

function TodoItem(props) {
    const { title, done } = props.data;
    const { removeTodo, update } = props;

    return (

        <li>
            <p>{props.data.title}</p>
            <p>{props.data.id}</p>
            <button className="todo__button" onClick={() => props.update(props.data.id)}>Edit</button>

            <button className="todo__button" onClick={removeTodo}>Delete</button>
        </li >
    );
}

export default TodoItem;






