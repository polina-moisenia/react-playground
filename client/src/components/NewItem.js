import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const NewItem = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();

        onSubmit({
            //todo replace
            id: `${Math.random()}`,
            description: inputValue
        });

        setInputValue("");
    }

    const sendMessage = async () => {
        try {
            //TODO fix this
            await axios.put('https://gy44av6oj6.execute-api.eu-north-1.amazonaws.com/items', {
                id: "",
                description: inputValue,
                checked: false
            });
            setInputValue("");
        }
        catch (error) {
            console.warn(`We are getting ${error}`);
        }
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" name="description" id="description" placeholder="Add new task" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button onClick={sendMessage}>Send</button>
            </form>
        </div>
    );
}

NewItem.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}