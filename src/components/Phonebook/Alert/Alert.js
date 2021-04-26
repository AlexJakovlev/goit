import { CSSTransition } from "react-transition-group";

import "./styles.css";
function Alert() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="alertfadeIn"
      timeout={500}
      unmountOnExit
    >
      <div className="alert">
        <p className="content">This contact already</p>{" "}
      </div>
    </CSSTransition>
  );
}
export default Alert;
