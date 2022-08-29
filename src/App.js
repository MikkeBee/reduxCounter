import "./index.css";
import Circle from "./components/Circle/Circle";
import Button from "./components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
import { increment } from "./features/counter/CounterSlice";

const App = () => {
  // const count = useSelector((state) => state.counter.value);
  // both product the same result
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div class="app">
      <Circle count={count} />
      <div class="buttonArea">
        <Button text={"Decrease 5"} />
        <Button text={"Decrease 1"} />
        <Button text={"Reset"} />
        <Button text={"Increase 1"} onClick={() => dispatch(increment())} />
        <Button text={"Increase 5"} />
      </div>
    </div>
  );
};

export default App;
