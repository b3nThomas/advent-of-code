export type GetScoreForRound = (moves: string) => number;

export enum RESULT {
    WIN = 6,
    DRAW = 3,
    LOSS = 0,
}

export const MOVE_BASED_RESULT_PAIRS: Record<string, RESULT> = {
    'A X': RESULT.DRAW,
    'A Y': RESULT.WIN,
    'A Z': RESULT.LOSS,
    'B X': RESULT.LOSS,
    'B Y': RESULT.DRAW,
    'B Z': RESULT.WIN,
    'C X': RESULT.WIN,
    'C Y': RESULT.LOSS,
    'C Z': RESULT.DRAW,
};

export const SHAPE_SCORE: Record<string, number> = {
    X: 1, // Rock
    Y: 2, // Paper
    Z: 3, // Scissors
};
