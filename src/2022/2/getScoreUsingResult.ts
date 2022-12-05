import {
    GetScoreForRound,
    PAPER_REQUIRED_MOVES,
    RESULT_SCORE,
    ROCK_REQUIRED_MOVES,
    SCISSORS_REQUIRED_MOVES,
} from './types';

export const getScoreUsingResult: GetScoreForRound = (moves) => {
    let moveScore = 0;
    [ROCK_REQUIRED_MOVES, PAPER_REQUIRED_MOVES, SCISSORS_REQUIRED_MOVES].forEach((moveSet, i) => {
        if (moveSet.includes(moves)) {
            moveScore = i + 1;
        }
    });
    return moveScore + RESULT_SCORE[moves.split(' ')[1]];
};
