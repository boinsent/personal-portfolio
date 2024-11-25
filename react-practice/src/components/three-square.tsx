import squareWithIMG from "../assets/images/3box1.png";
import squareNoIMG from "../assets/images/3box2.png";

function SquareWithIMG() {
  return (
    <>
      <img src={squareWithIMG} className="squareImage"></img>
    </>
  );
}

function SquareNoIMG() {
  return (
    <>
      <img src={squareNoIMG} className="squareImage"></img>
    </>
  );
}
const squareUtils = {
  SquareWithIMG,
  SquareNoIMG,
};

export default squareUtils;
