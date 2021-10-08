import React, { FC } from "react";
import ReactDOM from "react-dom";

import { useAppContext } from "../../appState";

import { PortalName } from "../../appState/actions";

type Props = {
  portalName: PortalName;
};

const Portal: FC<Props> = ({ portalName, children }) => {
  const [state] = useAppContext();

  return (
    <>
      {state[portalName] &&
        ReactDOM.createPortal(children, document.getElementById("root")!)}
    </>
  );
};

export default Portal;
