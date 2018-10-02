import {defaultReducer} from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('defaultReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = defaultReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: state.correctAnswer
    });

    // expect(state.guesses).toEqual([]);
    // expect(state.feedback).toEqual('Make your guess!');
    // expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    // expect(state.correctAnswer).toBeLessThanOrEqual(100);
    // expect(state.auralStatus).toEqual('');
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = defaultReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('generateAuralUpdate', () => {
    it('Should generate an aural update according to where you are in gameplay', () => {
      let state = {
        guesses: [3],
        feedback: "You're Warm."
      };
      state = defaultReducer(state, generateAuralUpdate());
      expect(state.guesses).toEqual([3]);
      expect(state.auralStatus).toContain("You've made 1 guess");
    });
  });

  describe('restartGame', () => {
    it('Should revert the state to initialState', () => {
      let state = {
        guesses: [1, 2, 3, 4, 5],
        feedback: "You're Ice Cold...",
        correctAnswer: 42
      };
      state = defaultReducer(state, restartGame(99));
      expect(state.correctAnswer).toEqual(99);
      // expect(state.feedback).toEqual('Make your guess!');
      // expect(state.correctAnswer).toEqual(correctAnswer);
      // expect(state.auralStatus).toEqual('');
    });
  });

  describe('makeGuess', () => {
    it('Should should add the latest guess to the guesses array', () => {
      let state = {
        feedback: "You're Ice Cold...",
        correctAnswer: 80,
        guesses: [3, 4, 5]
      };
      state = defaultReducer(state, makeGuess(80));
      expect(state.guesses).toEqual([3, 4, 5, 80]);
    });

    it('Should give you feedback based on guess', () => {
      let state = {
        feedback: "You're Ice Cold...",
        correctAnswer: 80,
        guesses: [1]
      };
      state = defaultReducer(state, makeGuess(80));
      expect(state.feedback).toEqual("You got it!");
    });
  });
});
