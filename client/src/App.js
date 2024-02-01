import React from 'react';
import { TodoList } from "./components/TodoList";
import { Provider } from 'react-redux';
import { store } from './store/store';
import './app.scss';
import FetchComponentAgain from './components/FetchAgain';
import InputComponent from './components/Input';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
      <InputComponent />
      <FetchComponentAgain />
    </div>
  );
}

export default App;
