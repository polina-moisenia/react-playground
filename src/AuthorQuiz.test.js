import React from 'react';
import ReactDOM from 'react-dom'
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter : new Adapter()})

const state = {
  turnData : {
    books : ['One', 'Two', 'Three'],
    author : {
      name: 'Name',
      imageUrl: 'some_url',
      imageSource: 'source',
      books: ['One']
    }
  },
  highlight: 'none',
  onAnswerSelected: () => {}
}

describe('Author Quiz', () => {
  it("renders without crashing", ()=>{
      const div = document.createElement("div");
      ReactDOM.render(<AuthorQuiz {...state}/>, div);
  });
})
