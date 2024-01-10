import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormCheck from 'react-bootstrap/FormCheck'
import CloseButton from 'react-bootstrap/CloseButton';

export const TodoItem = ({ id, description, done, onCheck, onDelete }) => {
    const defaultChecked = done ? done : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const onCheckUpdate = () => {
        setIsChecked((prev) => !prev)
        onCheck(id, isChecked);
    };

    return (
        <FormCheck>
            <FormCheck.Input type="radio" checked={isChecked} onClick={onCheckUpdate} />
            <FormCheck.Label>
                {description}
                <CloseButton onClick={() => onDelete(id)} />
            </FormCheck.Label>
        </FormCheck>
    );
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}