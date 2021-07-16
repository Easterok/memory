import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { MemoState } from "./memo.state";

const selectState = (state: {memo: MemoState}) => state.memo;

const selectCurrent = createDraftSafeSelector(selectState, state => state.current);

const selectValues = createDraftSafeSelector(selectState, state => state.values);

export const memoSelectors = {
    selectCurrent,
    selectValues
};