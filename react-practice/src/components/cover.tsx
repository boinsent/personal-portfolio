import squareUtils from "./three-square";
import picUtils from "./my-picture";
import { useState } from "react";

function Cover() {
  const [isNameVisible, setIsNameVisible] = useState(true);

  const handleButtonClick = () => {
    setIsNameVisible(false);
  };

  return (
    <>
      {/* Dark transparent cover */}
      {isNameVisible && (
        <div className="cover">
          {/* Blue container */}
          <div className="containerInside">
            {/* 3 squares */}
            <div className="squareWithIMG">
              <squareUtils.SquareWithIMG />
            </div>
            <div className="squareNoIMG">
              <squareUtils.SquareNoIMG />
            </div>
            {/* Container ng image*/}
            <div className="profileContainer">
              <picUtils.CoverPicture />
            </div>
            {/* About me */}
            <div className="profileText">
              <div className="aboutMe">
                <p className="hello">Hello,</p>
                <p>
                  Hello, I'm John Vincent Dela Cruz, a recent graduate of Rizal
                  Technological University (2024), with a degree in Computer
                  Engineering. I have a deep passion for technology and
                  programming.
                  <br></br>
                  <br></br>
                  Beyond coding, I am also an artist and gamer. My creative side
                  shines through in my traditional acrylic painting, where I
                  explore various forms of expression. Whether I’m crafting
                  software or creating artwork, I approach both with dedication
                  and enthusiasm.<br></br>
                  <br></br>
                  I’m always seeking opportunities to grow, collaborate, and
                  push the boundaries of what’s possible in both technology and
                  art. Let’s connect!<br></br>
                  <br></br>
                </p>
                <div className="knowMeMore" onClick={handleButtonClick}>
                  <button>Know Me More</button>
                </div>
                <p className="myName">John Vincent P. Dela Cruz</p>
                <p className="talentBelowName">
                  Computer Engineer | Programmer | Artist | Gamer
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cover;
