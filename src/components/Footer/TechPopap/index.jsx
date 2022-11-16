import React from 'react';
import logo from '../../../assets/icons/logo-svg.png';
import user from '../../../assets/images/summary (2).jpg';
import { GiBackwardTime } from 'react-icons/gi';
import whatsApp from '../../../assets/icons/icons8-whatsapp (2).svg';
import  './style.scss'

const TechPopap = (props) => {
  return (
    <div
      className={props.active ? "z-50 modal active" : "z-50 modal"}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <img className="modal__logo" src={logo} alt="Logo" />
          <h1 class="modal__title">Здравствуйте ! 👋</h1>
          <p className="modal__desc">Есть вопросы , напишите нам в Whats-App</p>
        </div>
        <div className="modal__text">
          <p className="modal__message">Напишите нашей тех.поддержке</p>
          <div className="modal__userAccount">
            <img src={user} alt="User" />
            <p>Среднее время ответа <br />
              <span>       <GiBackwardTime />       Менее 10 минут
              </span>
            </p>
          </div>
        </div>
        <button className="modal__whatsapp">
          <img src={whatsApp} alt="whatsapp" />
          <a target="_blank" href="https://wa.me/996508755552"> Перейти WhatsApp</a>
        </button>
      </div>
    </div>
  );
};

export default TechPopap;