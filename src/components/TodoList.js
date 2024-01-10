import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import { NewItem } from './NewItem';

export const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: "1", description: "First Todo", done: false },
        { id: "2", description: "Second Todo", done: false }
    ]);

    const addItem = (input) => {
        const newTodoItem = { ...input, done: false };

        setTodos([...todos, newTodoItem]);
    }

    return (
        <div className="App">
            <h2>Todos</h2>
            {
                todos.map(todo => <TodoItem key={todo.id} id={todo.id} description={todo.description} done={todo.done} />)
            }

            <NewItem onSubmit={addItem} />
        </div>
    );
}