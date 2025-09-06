import { useRef, useEffect } from "react";

const StateManagement = () => {
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("tick");
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    // <div>
    <p>Timer</p>
    // </div>
  );
};

export default StateManagement;
