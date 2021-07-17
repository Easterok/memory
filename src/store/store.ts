import {configureStore} from '@reduxjs/toolkit';
import {memoReducer} from './memo/memo.reducer';
import {MemoState} from './memo/memo.state';

type StoreState = {
    memo: MemoState;
};

export const store = configureStore<StoreState>({
    reducer: {
        memo: memoReducer,
    },
});
