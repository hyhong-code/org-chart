import React from "react";

import "./PanControl.scss";

const PanControl = ({ setTranslateX, setTranslateY }) => {
  const handlePanLeft = () => {
    setTranslateX(
      (prev) => `translateX(${parseFloat(prev.match(/[\-0-9]+/)[0]) - 100}px)`
    );
  };

  const handlePanRight = () => {
    setTranslateX(
      (prev) => `translateX(${parseFloat(prev.match(/[\-0-9]+/)[0]) + 100}px)`
    );
  };

  const handlePanUp = () => {
    setTranslateY(
      (prev) => `translateY(${parseFloat(prev.match(/[\-0-9]+/)[0]) - 100}px)`
    );
  };

  const handlePanDown = () => {
    setTranslateY(
      (prev) => `translateY(${parseFloat(prev.match(/[\-0-9]+/)[0]) + 100}px)`
    );
  };

  return (
    <div className="pan">
      <button className="pan-up" onClick={handlePanUp}>
        <i class="fas fa-arrow-up"></i>
      </button>

      <div>
        <button className="pan-left" onClick={handlePanLeft}>
          <i class="fas fa-arrow-left"></i>
        </button>
        <button className="pan-right" onClick={handlePanRight}>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <button className="pan-bottom" onClick={handlePanDown}>
        <i class="fas fa-arrow-down"></i>
      </button>
    </div>
  );
};

export default PanControl;