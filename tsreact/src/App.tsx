import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MinusCounter from "./components/MinusCounter";
import PlusCounter from "./components/PlusCounter";

function App() {
  const baseNum: number = 100;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>리액트</h1>
        <p>테스트</p>
        <MinusCounter countNum={baseNum} />
        <PlusCounter countNum={baseNum} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
