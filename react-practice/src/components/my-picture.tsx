import myPic from "../assets/images/my pic.jpg";
import coverPic from "../assets/images/mypic.png";
function MyPicture() {
  return (
    <>
      <img src={myPic} className="my-image"></img>
    </>
  );
}

function CoverPicture() {
  return (
    <>
      <img src={coverPic} className="coverPicture"></img>
    </>
  );
}

const picUtils = {
  MyPicture,
  CoverPicture,
};
export default picUtils;
