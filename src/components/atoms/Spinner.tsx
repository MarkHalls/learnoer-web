import React, { FC } from "react";
import cs from "classnames";

import "./Spinner.less";

type Props = {
  className?: string;
};

const Spinner: FC<Props> = ({ className }) => {
  return (
    <div className={cs(className, "Spinner")}>
      <div className="Spinner-animation"></div>
    </div>
  );
};

export default Spinner;
