import { useState } from 'react';

const App = () => {
  const [dice, setDice] = useState([]);
  const add = (color) => {
    setDice([...dice, { color, value: Math.floor(Math.random() * 6) + 1 }]);
  };
  const inc = (index) => {
    setDice((dice) => {
      const diceCopy = [...dice];
      diceCopy[index] = { ...dice[index] };
      if (diceCopy[index].value == 6) {
        diceCopy[index].value = 1;
      } else {
        diceCopy[index].value++;
      }
      return diceCopy;
    });
  };
  const rem = (index) => {
    setDice((dice) => dice.filter((_, i) => i !== index));
  };
  return (
    <div className="container">
      <div className="add-bar">
        <div className="add yellow" onClick={() => add('yellow')}>+</div>
        <div className="add blue" onClick={() => add('blue')}>+</div>
        <div className="add pink" onClick={() => add('pink')}>+</div>
        <div className="add black" onClick={() => add('black')}>+</div>
      </div>
      <div className="dice-pool">
        {dice.map(({ color, value }, index) => (
          <div
            className={`die ${color}`}
            onClick={() => inc(index)}
            onDoubleClick={() => rem(index)}
          >{value}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
