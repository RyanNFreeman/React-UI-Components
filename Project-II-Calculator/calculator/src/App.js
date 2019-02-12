import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import Symbols from './components/ButtonComponents/Symbols';

const App = () => {
  return (
    <div className = "wrapper">
      <header>
        <CalculatorDisplay />
      </header>
      <div className = "white-btns">
        <ActionButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />
      </div>
      <div className = "red-btns">
        <Symbols />
        <Symbols />
        <Symbols />
        <Symbols />
        <Symbols />


      </div>

      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
