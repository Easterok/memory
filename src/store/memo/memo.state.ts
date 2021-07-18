import {GameStatus} from '../../enums/game-status';

export type MemoState = {
    current: number;
    values: number[][];
    status: GameStatus;
    mistakes: number;
    selected: number[];
};
