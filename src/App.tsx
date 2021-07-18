import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import Button from './components/button/Button';
import {GameStatus} from './enums/game-status';
import {memoActions} from './store/memo/memo.actions';
import {memoSelectors} from './store/memo/memo.selectors';

function App() {
    const toggleHide = () => {
        dispatch(memoActions.increment());
        dispatch(memoActions.shafle());
    };

    const startGame = (value: number) => {
        if (value === 1) {
            dispatch(memoActions.start());
        }

        dispatch(memoActions.select(value));
    };

    const selected = useSelector(memoSelectors.selectSelectedValues);
    const values = useSelector(memoSelectors.selectValues);
    const status = useSelector(memoSelectors.selectStatus);
    const dispatch = useDispatch();

    const hideButton = (value: number) => selected.includes(value);

    return (
        <div className="table">
            {values.map((value, index) => (
                <div className="row" key={index}>
                    {value.map((v, vi) => (
                        <Button
                            key={vi}
                            value={v}
                            isCovered={status === GameStatus.InProgress}
                            hide={hideButton(v)}
                            onClick={k => startGame(k)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;
