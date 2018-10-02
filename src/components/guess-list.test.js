import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[1, 2, 3, 4, 5]} />);
  });

  it('Renders a list of guesses', () => {
    const guesses = [1, 2, 3];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(guesses.length);
    guesses.forEach((guess, index) => {
      expect(items.at(index).text()).toEqual(guess.toString());
    });
  });
});
