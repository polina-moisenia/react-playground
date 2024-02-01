import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.todos = [...state.todos, { ...action.payload }];
        },
        deleteItem: (state, action) => {
            state.todos.filter(i => i.id !== action.payload)
        },
        checkItem: (state, action) => {
            const index = state.todos.findIndex(i => i.id === action.payload.id);
            state.todos[index].done = action.payload.checked;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, checkItem } = todosSlice.actions;

export default todosSlice.reducer;