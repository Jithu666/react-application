import React, { useState, useEffect } from "react";

const heavyComputeOnce = () => {
  console.log("Running Expendive Computation.");
  return 6;
};

const ExpensiveUnit = () => {
  const [data] = useState(() => heavyComputeOnce());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 4000);
  }, []);

  return (
    <div className="flex justify-center items-center mt-10 p-4">
      {visible ? data : <p>Loading..</p>}
    </div>
  );
};

export default ExpensiveUnit;
