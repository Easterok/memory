import {Action} from '@reduxjs/toolkit';
import {GameStatus} from '../../enums/game-status';
import {memoActions} from './memo.actions';
import {MemoState} from './memo.state';

const nums = new Array(5 * 5).fill('').map((_, i) => i + 1);

function shafle(elem: number): number[][] {
    const array = [...nums];

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    const dict: Record<string, number> = {};

    for (let i = 0; i < elem; i++) {
        const index = array.pop();

        dict[String(index! - 1)] = i + 1;
    }

    const result: number[][] = [];

    for (let i = 0; i < 5; i++) {
        const arr: number[] = [];

        for (let k = 0; k < 5; k++) {
            const key = String(i * 5 + k);

            arr[k] = dict[key] || 0;
        }

        result[i] = arr;
    }

    return result;
}

function checkIsCorrectChoice(value: number, prevSelected: number[]): boolean {
    const prevElem = prevSelected[prevSelected.length - 1] || 0;

    return value === prevElem + 1;
}

const initialState: MemoState = {
    current: 3,
    values: shafle(3),
    status: GameStatus.Pending,
    mistakes: 0,
    selected: [],
};

function incrementReducer(state: MemoState): MemoState {
    return {
        ...state,
        current: state.current + 1,
    };
}

function resetReducer(state: MemoState): MemoState {
    return {
        ...state,
        current: 1,
    };
}

function shafleReducer(state: MemoState): MemoState {
    return {
        ...state,
        values: shafle(state.current),
    };
}

function startReducer(state: MemoState): MemoState {
    return {
        ...state,
        status: GameStatus.InProgress,
    };
}

function selectReducer(
    state: MemoState,
    {payload}: ReturnType<typeof memoActions.select>,
): MemoState {
    const isCorrect = checkIsCorrectChoice(payload, state.selected);
    const isOkStatus = state.status === GameStatus.InProgress;

    if (!isCorrect || !isOkStatus) {
        return {
            ...state,
            mistakes: state.mistakes + 1,
            status: GameStatus.Mistake,
            selected: [],
        };
    }

    if (state.selected.length === state.current - 1 && state.current === payload) {
        return {
            ...state,
            status: GameStatus.Success,
            selected: [],
        };
    }

    return {
        ...state,
        selected: [...state.selected, payload],
    };
}

export const memoReducer = (
    state: MemoState | undefined = initialState,
    action: Action,
): MemoState => {
    switch (action.type) {
        case memoActions.increment.type:
            return incrementReducer(state);
        case memoActions.reset.type:
            return resetReducer(state);
        case memoActions.shafle.type:
            return shafleReducer(state);
        case memoActions.start.type:
            return startReducer(state);
        case memoActions.select.type:
            return selectReducer(state, action as any);
        default:
            return state;
    }
};
