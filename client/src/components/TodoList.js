import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TodoItem } from './TodoItem';
import { NewItem } from './NewItem';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        try {
            // if I can't change server to work with CORS then

            // 1 - reverse proxy site
            // await axios.get('https://thingproxy.freeboard.io/fetch/https://gy44av6oj6.execute-api.eu-north-1.amazonaws.com/items');

            // 2 - some existing proxy lib ??

            // 3 - proxy api with cors enabled properly (like own proxy)
            //const { data } = await axios.get('http://localhost:5000/items');

            const { data } = await axios.get('http://localhost:5000/items');
            
            setTodos(data);
        }
        catch (e) {
            console.log('error', e);
        }
    };

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
        <div className='center'>
            <NewItem onSubmit={onItemAdded} />
            <div className="todo-items">
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
        </div>
    );
}