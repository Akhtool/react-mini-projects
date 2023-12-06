import { useState } from 'react';
import './index.scss';

function App() {
  const [counter, setCounter] = useState(0);

  function plus() {
    setCounter(counter + 1);
  }
  function minus() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button onClick={minus} className="minus">- Минус</button>
        <button onClick={plus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
