import "./ResetButton.css";
interface IResetButton {
  resetBoard: () => void;
}
export const ResetButton = ({ resetBoard }: IResetButton) => {
  return (
    <button className="reset-btn" onClick={resetBoard}>
      Reset
    </button>
  );
};
