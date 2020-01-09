import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

//TODO more data to make random sane
const authors = [
    {
        name: "Mark Twain",
        imageUrl: "images/authors/marktwain.jpg",
        imageSource: "Wikimedia Commons",
        books: [
            'The Adventures of Huckleberry Finn',
            'The second one of Mark Twain',
            'The theird one of Mark Twain'
        ]
    },
    {
        name: "Stephen King",
        imageUrl: "images/authors/stephenking.jpg",
        imageSource: "Wikimedia Commons",
        books: [
            'Shining',
            'The second one of Stephen King',
            'The theird one of Stephen King'
        ]
    },
    {
        name: "Charles Dickens",
        imageUrl: "images/authors/charlesdickens.jpg",
        imageSource: "Wikimedia Commons",
        books: [
            'A Christmas Carol',
            'The theird one of Charles Dickens',
            'The theird one of Charles Dickens'
        ]
    }
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const threeRandomBooks = shuffle(allBooks).slice(0, 3);
    const answer = sample(threeRandomBooks);

    return {
        books: threeRandomBooks,
        author: authors.find((author) => author.books.some((title) => title === answer))
    }
}

function reducer(
    state = { authors, turnData: getTurnData(authors), highlight: '' },
    action) {
    switch (action.type) {
        case 'ANSWER_SELECTED':
            const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
            return Object.assign(
                {},
                state, {
                highlight: isCorrect ? 'correct' : 'wrong'
            });
        case 'CONTINUE':
            return Object.assign({}, state, {
                highlight: '',
                turnData: getTurnData(state.authors)
            });
        case 'ADD_AUTHOR':
            return Object.assign({}, state, {
                authors: state.authors.concat([action.author])
            });
        default: return state;
    }
}

let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <React.Fragment>
                <Route exact path="/" component={AuthorQuiz} />
                <Route path="/add" component={AddAuthorForm} />
            </React.Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();