import React, { useState } from "react";

const InputComponent = () => {
    const [inputField, setInputField] = useState('');

    return (
        <form>
            <label htmlFor="input-field" />
            <input name="input-field" value={inputField} onChange={(e) => setInputField(e.target.value)} />
        </form>
    );
}

export default InputComponent;