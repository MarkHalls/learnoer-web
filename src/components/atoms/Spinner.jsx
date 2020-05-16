import React from "react";
import cs from "classnames";

import "./Spinner.less";

const Spinner = ({ className }) => {
  return (
    <div className={cs(className, "Spinner")}>
      <div className="Spinner-animation"></div>
    </div>
  );
};

export default Spinner;
