import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItem, checkItem } from './../store/itemsSlice';

export const TodoItem = ({ id, description, done }) => {
    const defaultChecked = done ? done : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const dispatch = useDispatch();

    const onCheckUpdate = () => {
        
        
        dispatch(deleteItem({ id, checked: !isChecked }));
        setIsChecked((prev) => !prev);
    };

    const onDelete = () => {
        dispatch(checkItem(id));
    }

    return (
        <div className='todo-item'>
            <div className="todo-item__content">
                <input type="checkbox" name="checked" defaultChecked={done} onChange={onCheckUpdate} />
                <label htmlFor="checked" >{description} {done}</label>
            </div>
            <button onClick={() => onDelete(id)}>x</button>
        </div>
    );
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
}