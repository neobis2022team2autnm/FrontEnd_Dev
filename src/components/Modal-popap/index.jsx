// //import React
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// //import styles
// // import style from './style.module.scss';


// const ModalPopap = (props) => {

//   const { isLogged } = useSelector((state) => state.general);

//   useEffect(() => {
//     if (isLogged) {
//       props.setActive(false);
//     }
//   }, [isLogged]);


//   return (
//     <div
//       className={props.active ? (style.modal.active) : (style.modal)}
//       onClick={() => props.setActive(false)}
//     >
//       <div
//         className={props.active ? style.modal__content.active : style.modal__content}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <img className={style.modal__logo} src={props.logo} alt="Logo" />
//         <h5 className={style.modal__title}>
//           Sign in to unlock the best of <br />
//           SilkRoad Trip.
//         </h5>

//         {props.children}
//       </div>
//     </div>
//   );
// };

// export default ModalPopap;

import React from 'react';

const ModalPopap = () => {
  return (
    <div>
      hello
    </div>
  );
};

export default ModalPopap;