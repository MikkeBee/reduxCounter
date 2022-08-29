import "./index.css";
import Circle from "./components/Circle/Circle";
import Button from "./components/Button/Button";
import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div class="app">
      <Circle count={count} />
      <div class="buttonArea">
        <Button text={"Decrease 5"} />
        <Button text={"Decrease 1"} />
        <Button text={"Reset"} />
        <Button text={"Increase 1"} />
        <Button text={"Increase 5"} />
      </div>
    </div>
  );
};

export default App;
