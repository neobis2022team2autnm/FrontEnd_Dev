//import React and additional dependensice
import React from "react";

//import redux dependencies
import { useSelector, useDispatch } from "react-redux";

//import components
import { Board } from "../../components/Board";
import Unlogged from "../../components/Unlogged";
import { setLogout } from "../../redux/reducers/generalSlice";
import Slider from "../../components/Slider";

//import styles
import "./style.scss";

const sliderData = [
  {
    id: 1,
    title: "Про какое место хотите узнать больше?",
  },
  {
    id: 2,
    title: "Популярные статьи",
  },
  {
    id: 3,
    title: "Места, где можно вкусно поесть",
  },
  {
    id: 4,
    title: "Здесь вы можете отдохнуть",
  },
];

const Home = () => {

  const { isLogged, user } = useSelector((state) => state.general);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
    dispatch(isLogged(false));
  };

  return (
    <div>
      <Slider  title="Про какое место хотите узнать больше?" />
      <Slider  title="Популярные статьи" />
      <Slider  title="Места, где можно вкусно поесть" />
      <Slider  title="Здесь вы можете отдохнуть" />
      <div className="board">
        {isLogged ? <Board user={user} logout={handleLogout} /> : <Unlogged />}
      </div>
    </div>
  );
};

export default Home;
