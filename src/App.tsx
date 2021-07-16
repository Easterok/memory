import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Button from './components/Button'
import { memoActions } from './store/memo/memo.actions';
import { memoSelectors } from './store/memo/memo.selectors';

function App() {
  const toggleHide = () => {
    dispatch(memoActions.increment());
    dispatch(memoActions.shafle());
  }

  // const current = useSelector(memoSelectors.selectCurrent);
  const values = useSelector(memoSelectors.selectValues);
  const dispatch = useDispatch();

  return (
    <>
      {values.map((value, index) => {
        return <div key={index}>
          {value.map((v, vi) => <Button value={v} key={vi} hide={false} onClick={value => console.log(value)} />)}
        </div>
      })}

      <button onClick={toggleHide}>toggle</button>
    </>
  );
}

export default App;