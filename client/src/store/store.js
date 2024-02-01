import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import todosReducer from './itemsSlice'

const TODO_ADDED = 'todos/todoAdded';
const TODO_CHECKED = 'todos/todoChecked';
const TODO_DELETED = 'todos/todoDeleted';

//must not do any asynchronous logic, calculate random values, or cause other "side effects"
const oldStyleTodosReducer = (state, action) => {
    switch (action.type) {
        case TODO_CHECKED: {
            const index = state.todos.findIndex(i => i.id === action.payload.id);
            state.todos[index].done = action.payload.checked;

            return { ...state, todos: [...state.todos] };
        }
        case TODO_ADDED:
            return { ...state, todos: [...state.todos, { ...action.payload }] };
        case TODO_DELETED:
            return { ...state, todos: state.todos.filter(i => i.id !== action.payload) };
        default:
            return state;
    }
}

const sendMessage = (inputValue) => {
    axios.put('https://gy44av6oj6.execute-api.eu-north-1.amazonaws.com/items', {
        id: `${Math.random()}`,
        description: inputValue,
        checked: false
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
}

const getTodos = async () => {
    try {
        // if I can't change server to work with CORS then

        // 1 - reverse proxy site
        // await axios.get('https://thingproxy.freeboard.io/fetch/https://gy44av6oj6.execute-api.eu-north-1.amazonaws.com/items');

        // 2 - some existing proxy lib ??

        // 3 - proxy api with cors enabled properly (like own proxy)
        //const { data } = await axios.get('http://localhost:5000/items');

        const { data } = await axios.get('http://localhost:5000/items');

        setTodos(data);
    }
    catch (e) {
        console.log('error', e);
    }
};

async function fetchData(setData) {
    try {
      const response = await fetch('<https://api.example.com/data>');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  } 


//Action Creators
export const addTodoAction = (payload) => ({ type: TODO_ADDED, payload });
export const checkTodoAction = (payload) => ({ type: TODO_CHECKED, payload });
export const deleteTodoAction = (payload) => ({ type: TODO_DELETED, payload });

export const selectTodosValue = state => state.todos;

export const store = configureStore({ reducer: { todos: todosReducer } });