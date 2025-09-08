import React, { useEffect } from "react";

const KeyListener = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <p>Press Esc key to close this modal</p>
    </div>
  );
};

export default KeyListener;
