import { useState } from "react";
import styles from "./App.module.css";

const numbers = [
  { id: 0, number: 0 },
  { id: 1, number: 1 },
  { id: 2, number: 2 },
  { id: 3, number: 3 },
  { id: 4, number: 4 },
  { id: 5, number: 5 },
  { id: 6, number: 6 },
  { id: 7, number: 7 },
  { id: 8, number: 8 },
  { id: 9, number: 9 },
  { id: "+", number: "+" },
  { id: "-", number: "-" },
  { id: "=", number: "=" },
  { id: "C", number: "C" },
];

const onlyNumbers = numbers.filter((item) => !isNaN(Number(item.number)));

const foundPlus = numbers.find((item) => item.id === "+");
const foundMinus = numbers.find((item) => item.id === "-");
const foundEquals = numbers.find((item) => item.id === "=");
const foundReset = numbers.find((item) => item.id === "C");

function App() {
  const [switchColor, setSwitchColor] = useState(false);

  const [value, setValue] = useState("");
  const onClickResult = () => {
    setSwitchColor(!switchColor);
    setValue(eval(value));
  };
  const onClickPlus = () => {
    setSwitchColor();
    setValue(value + " + ");
  };
  const onClickMinus = () => {
    setSwitchColor();
    setValue(value + " - ");
  };
  return (
    <div className={styles.container}>
      <button onClick={() => setValue("")} className={styles.reset}>
        {foundReset.number}
      </button>
      <input
        className={switchColor ? styles.result : styles.input}
        type="text"
        value={value}
      ></input>
      <div className={styles.block}>
        {onlyNumbers.map(({ id, number }) => (
          <button
            onClick={() => setValue(`${value}${number}`)}
            key={id}
            className={styles.numbers}
          >
            {number}
          </button>
        ))}
        <div>
          <button onClick={onClickPlus} className={styles.operator}>
            {foundPlus.number}
          </button>
          <button onClick={onClickMinus} className={styles.operator}>
            {foundMinus.number}
          </button>
          <button onClick={onClickResult} className={styles.operator}>
            {foundEquals.number}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
