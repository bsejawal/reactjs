import "./ScoreBoard.css";

interface IScore {
  scores: { xScore: number; oScore: number };
  xPlaying: boolean;
}
export const ScoreBoard = ({ scores, xPlaying }: IScore) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
};
