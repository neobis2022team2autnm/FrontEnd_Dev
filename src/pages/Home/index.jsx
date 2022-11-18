//import React and additional dependensice
import React from "react";

//import redux dependencies
import { useSelector, useDispatch } from "react-redux";
import {
  regions,
  articles,
  foodPlace,
  reluxPlace,
} from "../../assets/mock-data/data";

//import components
import { Board } from "../../components/Board";
import Unlogged from "../../components/Unlogged";
import { setLogout } from "../../redux/reducers/generalSlice";
import Slider from "../../components/Slider";

//import styles
import "./style.scss";

import { useTranslation } from "react-i18next";
import Articles from "../../components/Articles";
import Hero from "../../components/Hero";
import Navigation from "../../components/Navigation";
import SearchBar from "../../components/Search-bar";

console.log(regions);
const Home = () => {
  const { t } = useTranslation();
  const { isLogged, user } = useSelector((state) => state.general);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
    dispatch(isLogged(false));
  };

  return (
    <>
      <Navigation />
      <SearchBar />
      {/* <div className="board">
        {isLogged ? <Board user={user} logout={handleLogout} /> : <Unlogged />}
      </div> */}
      <Slider data={regions} title={t("want_to_know_more")} id="slider-1" />
      <Hero />
      <Slider data={articles} title={t("popular_articles")} id="slider-2" />
      <Slider
        data={foodPlace}
        title={t("places_where_i_can_eat_good_food")}
        id="slider-3"
      />
      <Articles />
      <Slider
        data={reluxPlace}
        title={t("you_can_have_a_good_time_here")}
        id="slider-4"
      />
    </>
  );
};

export default Home;
