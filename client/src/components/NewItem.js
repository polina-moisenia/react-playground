import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addItem } from './../store/itemsSlice';

export const NewItem = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(addItem({
            id: uuidv4(),
            description: inputValue,
            done: false
        }));

        setInputValue("");
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" name="description" id="description" placeholder="Add new task" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </form>
        </div>
    );
}