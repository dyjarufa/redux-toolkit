import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { connect } from "react-redux";

function App({ count, increment, incrementAmount }) {
  // agora o count vem como um propriedade do componente
  // const [count, setCount] = useState(0);

  function handleOnclick() {
    increment();
  }
  function handleOnclickAmount() {
    incrementAmount(5);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnclick}>count is {count}</button>
        <button onClick={handleOnclickAmount}>increment amount</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// mapear estado do redux para o componente
const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
  };
};

//* mapear funções/ações do redux para o component
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "counter/increment" }),
    incrementAmount: (amount) =>
      dispatch({ type: 'counter/incrementAmount', payload: amount }),
  };
};

//* connect injeta o estado aplicação internamente (counter.value = 0)
export default connect(mapStateToProps, mapDispatchToProps)(App); // conectar o componente com o redux - padrão HOC
