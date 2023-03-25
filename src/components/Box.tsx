import "./Box.css";

interface IBox {
  value?: string;
  onClick?: () => void;
}
export const Box = (prop: IBox) => {
  const style = prop.value === "X" ? "box x" : "box o";
  return (
    <>
      <button className={style} onClick={prop.onClick}>
        {prop.value}
      </button>
    </>
  );
};
