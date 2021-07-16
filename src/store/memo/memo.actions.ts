import { createAction } from "../../utils/create-action";

const increment = createAction('[Memo] Increment');

const reset = createAction('[Memo] Reset');

const shafle = createAction('[Memo] Shafle');

export const memoActions = {
    increment,
    reset,
    shafle,
}