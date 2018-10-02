import {generateAuralUpdate, restartGame, makeGuess} from './actions';
// to not need to use "GENERATE_AURAL_UPDATE" in quotes for below tests,
// import the variables themselves above, as well

describe('generateAuralUpdate', () => {
  it('Should return the action', () => {
    const action = generateAuralUpdate();
    expect(action.type).toEqual("GENERATE_AURAL_UPDATE");
  });
});

describe('restartGame', () => {
  it('Should return the action', () => {
    const correctAnswer = 42;
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual("RESTART_GAME");
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe('makeGuess', () => {
  it('Should return the action', () => {
    const guess = 33;
    const action = makeGuess(guess);
    expect(action.type).toEqual("MAKE_GUESS");
    expect(action.guess).toEqual(guess);
  });
});
