//import React
import React from "react";

//import styles
import "./style.scss";

const ModalPopap = (props) => {
  
  return (
    <div
      className={props.active ? "z-50 modal active" : "z-50 modal"}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <img className="modal-logo" src={props.logo} alt="Logo" />
        <h5 className="modal-title">Sign in to unlock the best of <br/>
           SilkRoad Trip.</h5>
        
        {props.children}
      </div>
    </div>
  );
};

export default ModalPopap;
