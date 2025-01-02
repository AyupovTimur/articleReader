import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "entities/Counter/model/slice/counterSlice";
import {getCounterValue} from "entities/Counter/model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {

    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1>{counterValue}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};
