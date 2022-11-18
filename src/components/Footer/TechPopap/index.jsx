import React from 'react';
import logo from '../../../assets/icons/logo-svg.png';
import user from '../../../assets/images/summary (2).jpg';
import { GiBackwardTime } from 'react-icons/gi';
import whatsApp from '../../../assets/icons/icons8-whatsapp (2).svg';
import classNames from 'classnames';
import style from './style.module.scss'

const TechPopap = ({ active, setActive }) => {
  console.log(style.modal)
  console.log(style.active)
  return (
    <div
      className={classNames(style.techModal, { [style.active]: active })}
      onClick={() => setActive(!active)}
    >
      <div
        className={classNames(style.techModal__content, { [style.active]: active })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.techModal__header}>
          <img className={style.techModal__logo} src={logo} alt="Logo" />
          <h1 class={style.techModal__title}>Здравствуйте ! 👋</h1>
          <p className={style.techModal__desc}>Есть вопросы , напишите нам в Whats-App</p>
        </div>
        <div className={style.techModal__text}>
          <p className={style.techModal__message}>Напишите нашей тех.поддержке</p>
          <div className={style.techModal__userAccount}>
            <img src={user} alt="User" />
            <p>Среднее время ответа <br />
              <span>       <GiBackwardTime />       Менее 10 минут
              </span>
            </p>
          </div>
        </div>
        <button className={style.techModal__whatsapp}>
          <img src={whatsApp} alt="whatsapp" />
          <a target="_blank" href="https://wa.me/996508755552"> Перейти WhatsApp</a>
        </button>
      </div>
    </div >
  );
};

export default TechPopap;