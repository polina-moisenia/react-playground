import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from './Checkbox';

export const TodoItem = ({ id, description, done }) => {
    //todo add delete button
    return <Checkbox id={id} label={description} checked={done} />;
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
}