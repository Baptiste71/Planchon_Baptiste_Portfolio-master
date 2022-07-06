import React from "react";
import "./_spinner.scss";

const Spinner = () => {
  return (
    <div className="pageLoader">
      <div className="circle1">
        <div className="circle2">
          <div className="circle3"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
