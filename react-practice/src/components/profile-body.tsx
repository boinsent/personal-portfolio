import picUtils from "./my-picture";
import utils from "./background";
function ProfileBody() {
  return (
    <>
      <div className="buttons">
        <button>My Profile</button>
        <button>Activities</button>
      </div>

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
    </>
  );
}

export default ProfileBody;
