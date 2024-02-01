import React from 'react';
import { TodoItem } from './TodoItem';
import { NewItem } from './NewItem';
import { useSelector } from 'react-redux'

export const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)

    return (
        <div className='center'>
            <NewItem />
            <div className="todo-items">
                {
                    todos.map(todo => <TodoItem
                        key={todo.id}
                        id={todo.id}
                        description={todo.description}
                        done={todo.done}
                    />)
                }
            </div>
        </div>
    );
}