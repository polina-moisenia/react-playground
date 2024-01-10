import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export const NewItem = ({ onSubmit }) => {
    const descriptionRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();

        console.log(descriptionRef?.current?.value);

        onSubmit({
            //todo replace
            id: `${Math.random()}`,
            description: descriptionRef?.current?.value
        });

        descriptionRef.current.value = "";
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" name="description" id="description" placeholder="Add task" ref={descriptionRef}></input>
            </form>
        </div>)
}

NewItem.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}