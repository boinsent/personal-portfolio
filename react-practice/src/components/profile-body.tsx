import picUtils from "./my-picture";
import samplePic from "../assets/images/speedtest.png";
import utils from "./background";
import { useState } from "react";

function ProfileBody() {
  const [isActivityVisible, setActivityVisible] = useState(true);
  const [isProfileVisible, setProfileVisible] = useState(false);

  // show activity and hide profile
  const displayActivity = () => {
    setActivityVisible(false);
    setProfileVisible(true);
  };
  // show profile and hide activity
  const displayProfile = () => {
    setProfileVisible(false);
    setActivityVisible(true);
  };
  return (
    <>
      <div className="buttons">
        <button onClick={displayProfile}>My Profile</button>
        <button onClick={displayActivity}>Activities</button>
      </div>

      {/* MY PROFILE */}
      {isActivityVisible && (
        <div className="container">
          <div className="container-left">
            <div className="centered-items">
              <p className="my-name">John Vincent P. Dela Cruz</p>
              <picUtils.MyPicture />
              <p className="talent">
                Computer Engineer | Programmer | Artist | Gamer
              </p>
            </div>
            {/* background.tsx  // Left side*/}
            <utils.Education />
            <utils.Skills />
            {/* <utils.Reference /> */}
          </div>
          <div className="container-right">
            {/* background.tsx // Right side */}
            <utils.ShortDetaials />
            <utils.LineSeparation />
            <utils.Contacts />
            <utils.WorkExperience />
            <utils.WorkProject />
            <p className="viewMore">View more</p>
          </div>
          <div className="quote">
            <p>
              <p className="quoteitallic">
                "The secret to doing anything is believing that you can do it."
              </p>
              - Bob Ross
            </p>
          </div>
        </div>
      )}
      {/* ACTIVITIES */}
      {isProfileVisible && (
        <div className="activity">
          <div className="upperContainer">
            <p>I have a different application where I can post my activities here including software projects.</p>
          </div>
          {/* this section will get data from database. imma put it on for loop latur */}
          <div className="postContainer">
            <div className="dateEdit">
            <p>DATE CONTAINER</p>
            <button>Edit</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eu efficitur diam. Quisque interdum in elit non
              tempus. Proin vulputate neque ac ipsum fringilla pharetra. Aliquam
              erat volutpat.{" "}
            </p>
            <div className="imageContainer"><img src={samplePic}></img></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileBody;
