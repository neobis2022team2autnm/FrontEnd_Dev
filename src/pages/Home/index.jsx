//import React and additional dependensice
import React from "react";

//import redux dependencies
import { useSelector, useDispatch } from "react-redux";

//import components
import { Board } from "../../components/Board";
import Unlogged from "../../components/Unlogged";
import { setLogout } from "../../redux/reducers/generalSlice";

//import styles
import "./style.scss";

const Home = () => {
  //redux dependencies
  
  const { isLogged, user } = useSelector((state) => state.general);

  const dispatch = useDispatch();
  const handleLogout = () =>{ dispatch(setLogout())
    dispatch(isLogged(false));
  }


  

  return (
    <div className="page">
      <div className="board">
        {isLogged ? <Board user={user} logout={handleLogout} /> : <Unlogged />}
      </div>
    </div>
  );
};

export default Home;
