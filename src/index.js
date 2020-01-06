import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
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

function resetState() {
    return {
        turnData: getTurnData(authors),
        highlight: ''
    };
}
let state = resetState();

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function App() {
    return (<AuthorQuiz {...state}
        onAnswerSelected={onAnswerSelected}
        onContinue={() => {
            state = resetState();
            render();
        }} />);
}

const AuthorWrapper = withRouter(({ history }) =>
    <AddAuthorForm onAddAuthor={(author) => {
        authors.push(author);
        history.push('/');
    }} />
);

function render() {
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path='/' component={App} />
                <Route path='/add' component={AuthorWrapper} />
            </React.Fragment>
        </BrowserRouter>, document.getElementById('root'));
}
render();
serviceWorker.unregister();