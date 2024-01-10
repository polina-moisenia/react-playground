import React from "react";
import PropTypes from 'prop-types';
import './DeleteButton.scss';

export const DeleteButton = ({ id, onClick, ...props }) => {
    return (
        <button id={id} className="delete-button" onClick={() => onClick(id)} {...props}>
            <span className="delete-button__icon">&times;</span>
        </button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}