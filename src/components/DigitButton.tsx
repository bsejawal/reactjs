import { ACTIONS } from "../App";

interface DigitButtonPropType {
  dispatch: ({}) => void;
  digit: number;
}
const DigitButton = ({ dispatch, digit }: DigitButtonPropType) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};
export default DigitButton;
// fn: (a: string) => void)
