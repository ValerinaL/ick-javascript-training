import React, { useState } from 'react';
import TodoItem from './TodoItem';


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    function onSubmit(event) {
        event.preventDefault();

        const newTodo = {
            id: todos.length,
            title: todoInput,
            textarea: todoInput,
            done: false
        };

        setTodos(prevState => [
            newTodo,
            ...prevState
        ]);
        setTodoInput('');
    }

    function onChange(event) {
        setTodoInput(event.target.value);
    }

    function removeTodo(id) {
        setTodos(prevState => prevState.title(todo => todo.id !== id));
    }


    function update(id) {

        const data = todoInput.filter(title => id === !id ? todoInput++ : false);

        data.sort((a, b) => {
            return b.todoInput - a.todoInput;
        });
    }

    function PostButton(props) {
        return (
            <button onClick={() => props.handleClick()}>{props.label}</button>
        );
    }

    function PostText(props) {
        return (
            <div>{props.text}</div>
        );
    }

    function Post(props) {
        return (
            <div>
                <PostButton label='x' handleClick={props.removeTite} />
                <PostText text={props.title} />
                <PostButton label='+' handleClick={props.incrementTitle} />
                <PostText text={props.title} />
                <PostButton label='-' handleClick={props.decrementTitle} />
            </div>
        );
    }


    return (
        <>
            <form className="todo__form" onSubmit={onSubmit}>
                <label htmlFor="todo-input">Title:</label>
                <input
                    type="text"
                    id="todo-input"
                    name="todo-input"
                    value={todoInput}
                    onChange={onChange}
                    placeholder="Type here.."
                    required
                ></input>
            </form>

            <form className="todo__form" onSubmit={onSubmit}>
                <label htmlFor="todo-input">Enter a new Task</label>
                <textarea
                    type="textarea"
                    id="todo-input"
                    name="todo-input"
                    value={todoInput}
                    onChange={onChange}
                    placeholder="Type here.."
                    required
                ></textarea>
                <button>Submit</button>
                <hr />
            </form>



            <div className="todo_list">
                <ul>
                    {!todos.length ? (
                        <i>There are no pending tasks</i>
                    ) : (
                            todos.map(todo => (
                                <TodoItem
                                    key={todo.id}
                                    data={todo}
                                    removeTodo={() => removeTodo(todo.id)}
                                    update={() => update(todo.id)}
                                />
                            ))
                        )}
                </ul>
            </div>
        </>
    );
}

export default TodoList;
