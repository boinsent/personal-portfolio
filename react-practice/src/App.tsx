import { useState, useEffect } from "react";
import ProfileBody from "./components/profile-body";
import Cover from "./components/cover";
import Loading from "./components/loading";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Cover />
          <div className="myProfile">
            <ProfileBody />
          </div>
          <div className="myActivities"></div>
        </>
      )}
    </>
  );
}

export default App;
