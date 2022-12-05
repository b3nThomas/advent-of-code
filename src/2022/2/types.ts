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

export const RESULT_SCORE: Record<string, number> = {
    X: 0, // Loss
    Y: 3, // Draw
    Z: 6, // Win
};

export const ROCK_REQUIRED_MOVES = [
    'B X', // Lose against Paper
    'A Y', // Draw with Rock,
    'C Z', // Win against Scissors
];

export const PAPER_REQUIRED_MOVES = [
    'C X', // Lose against Scissors
    'B Y', // Draw with Paper
    'A Z', // Win against Rocks
];

export const SCISSORS_REQUIRED_MOVES = [
    'A X', // Lose against Rock
    'C Y', // Draw against Scissors
    'B Z', // Win against Paper
];
