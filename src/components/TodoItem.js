import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from './Checkbox';
import { DeleteButton } from './DeleteButton';

export const TodoItem = ({ id, description, done, onCheck, onDelete }) => {
    return (
        <div className="todo-item">
            <Checkbox id={id} checked={done} onCheck={onCheck} />
            <label htmlFor={id} className="todo-item__label">{description}</label>
            <DeleteButton id={id} onClick={onDelete} />
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