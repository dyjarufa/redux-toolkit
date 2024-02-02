import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, incrementAmount } from "./features/counter/counter.slice";
import { useAppSelector } from "./hooks";

// function App({ count, increment, incrementAmount }) {
// agora o count vem como um propriedade do componente
// const [count, setCount] = useState(0);

export default function App() {
  //? useSelector --> retorna o pedaço do estado que eu quero recebe, o comp passa encher o estado dentro do redux e comparar o estado anterior para atualizar
  // const count = useSelector((state) => state.counter.value);

  //* a partir de agora minha aplicação entende a tipagem pelo o meu hook useAppSelector
  const count = useAppSelector((state) => state.counter.value);
  
  const dispatch = useDispatch();

  function handleOnclick() {
    // increment();
    // dispatch({ type: "counter/increment" });
    dispatch(increment());
  }

  function handleOnclickAmount() {
    // incrementAmount(5);
    // dispatch({ type: "counter/incrementAmount", payload: 5 });
    dispatch(incrementAmount(5));
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

/*
? Form OLD-SCHOOL de implementar o redux  
//* mapear estado do redux para o componente
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
 */
