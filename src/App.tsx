import { useReducer } from "react";
import "./App.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}
const initialState = {
  currentOperand: "0",
  previousOperand: "0",
  operation: "0",
};
interface CalculatorAction {
  type: string;
  payload: {
    digit: number;
  };
}

function reducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""} ${action.payload.digit}`,
      };
  }
  return state;
}
function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    initialState
  );
  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });
  return (
    // <div className="App">
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
    // </div>
  );
}

export default App;
