import { useState, useEffect } from "react";

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-text">
        <span className="loading-title">Loading...</span>
        <span className="loading-percent">{progress}%</span>
      </div>
      <div className="loading-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default Loading;
