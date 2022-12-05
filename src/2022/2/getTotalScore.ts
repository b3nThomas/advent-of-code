import { GetScoreForRound } from './types';

export const getTotalScore = (getScore: GetScoreForRound, rounds: string[]): number =>
    rounds.reduce((total, round) => (total += getScore(round)), 0);
