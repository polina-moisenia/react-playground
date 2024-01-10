import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import { NewItem } from './NewItem';

export const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: "1", description: "First Todo", done: false },
        { id: "2", description: "Second Todo", done: false }
    ]);

    const onItemChecked = (id, isDone) => {
        const index = todos.findIndex(i => i.id === id);
        const result = [
            ...todos.slice(0, index),
            { id, description: todos[index].description, done: isDone },
            ...todos.slice(index + 1, todos.length),
        ];

        setTodos(result);
    }

    const onItemDeleted = (id) => {
        setTodos([...todos.filter(i => i.id !== id)]);
    }

    const onItemAdded = (input) => {
        setTodos([...todos, { ...input, done: false }]);
    }

    return (
        <div className="todo-list">
            <h2>Todos</h2>

            <NewItem onSubmit={onItemAdded} />
            {
                todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        description={todo.description}
                        done={todo.done}
                        onCheck={onItemChecked}
                        onDelete={onItemDeleted}
                    />)
            }
        </div>
    );
}