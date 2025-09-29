import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center">
      <div className="flex-grow h-px bg-gray-100"></div>
      <div className="px-3 text-sm font-medium text-gray-500 mt-1">OR</div>
      <div className="flex-grow h-px bg-gray-50"></div>
    </div>
  );
};

export default Divider;
