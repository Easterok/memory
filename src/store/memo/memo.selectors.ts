import {createDraftSafeSelector} from '@reduxjs/toolkit';
import {GameStatus} from '../../enums/game-status';
import {MemoState} from './memo.state';

const selectState = (state: {memo: MemoState}) => state.memo;

const selectCurrent = createDraftSafeSelector(selectState, state => state.current);

const selectValues = createDraftSafeSelector(selectState, state => state.values);

const selectStatus = createDraftSafeSelector(selectState, state => state.status);

const selectSelectedValues = createDraftSafeSelector(
    selectState,
    state => state.selected,
);

export const memoSelectors = {
    selectCurrent,
    selectValues,
    selectSelectedValues,
    selectStatus,
};
