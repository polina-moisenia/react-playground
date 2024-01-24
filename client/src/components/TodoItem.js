import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ id, description, done, onCheck, onDelete }) => {
    const defaultChecked = done ? done : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const onCheckUpdate = () => {
        setIsChecked((prev) => !prev)
        onCheck(id, isChecked);
    };

    return (
        <div className='todo-item'>
            <div className="todo-item__content">
                <input type="radio" name="checked" checked={isChecked} onClick={onCheckUpdate} />
                <label htmlFor="checked" >{description}</label>
            </div>
            <button onClick={() => onDelete(id)}>x</button>
        </div>
    );
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}