import {Action} from '@reduxjs/toolkit';
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

const initialState: MemoState = {
    current: 5,
    values: shafle(5),
};

export const memoReducer = (
    state: MemoState | undefined = initialState,
    action: Action,
): MemoState => {
    switch (action.type) {
        case memoActions.increment.type:
            return {...state, current: state.current + 1};
        case memoActions.reset.type:
            return {...state, current: 1};
        case memoActions.shafle.type:
            return {...state, values: shafle(state.current)};
        default:
            return state;
    }
};
