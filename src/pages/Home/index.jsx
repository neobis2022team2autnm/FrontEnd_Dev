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

import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation()
  const { isLogged, user } = useSelector((state) => state.general);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
    dispatch(isLogged(false));
  };

  return (
    <div>
      <Slider  title={t('want_to_know_more')} id="slider-1" />
      <Slider  title={t('popular_articles')} id="slider-2" />
      <Slider  title={t('places_where_i_can_eat_good_food')}  id="slider-3" />
      <Slider  title={t('you_can_have_a_good_time_here')} id="slider-4" />
      <div className="board">
        {isLogged ? <Board user={user} logout={handleLogout} /> : <Unlogged />}
      </div>
    </div>
  );
};

export default Home;
