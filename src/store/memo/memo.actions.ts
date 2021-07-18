import {createAction} from '../../utils/create-action';

const increment = createAction('[Memo] Increment');

const reset = createAction('[Memo] Reset');

const shafle = createAction('[Memo] Shafle');

const start = createAction('[Memo] Start');

const select = createAction<number>('[Memo] Select');

export const memoActions = {
    increment,
    reset,
    shafle,
    start,
    select,
};
