import { GetScoreForRound, MOVE_BASED_RESULT_PAIRS, SHAPE_SCORE } from './types';

export const getScoreUsingMove: GetScoreForRound = (moves: string) =>
    MOVE_BASED_RESULT_PAIRS[moves] + SHAPE_SCORE[moves.split(' ')[1]];
