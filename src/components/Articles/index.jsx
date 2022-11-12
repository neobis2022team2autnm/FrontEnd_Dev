import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import alai from "../../assets/images/filip-zrnzevic-QsWG0kjPQRY-unsplash.jpg";
import logo from "../../assets/icons/logo-svg.png";

import "./style.scss";
export default function Articles() {
  return (
    <section className="container mx-auto pt-32 ">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-12 px-4 md:px-4">
          <div className="cart-item">
            <img
              src="https://cdn.shortpixel.ai/spai/q_glossy+w_977+to_webp+ret_img/https://uncorneredmarket.com/wp-content/uploads/2018/06/HeightsofAlay_Trek_Kyrgyzstan_34.jpg"
              alt="Photos"
            />
            <h2 className="cart-item__title">Алай</h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            {/* <img className="articles-img" src={logo} alt="Logo" /> */}
            <h2 className="title font-bold text-4xl mb-6 leading-normal">
              Насладитесь сотнями фотографиями наших пользователей
            </h2>

            <button

              className="bg-black hover:bg-black-700 text-white font-bold py-2 px-6 border border-black-700 rounded py-2 px-4"
            >
              Посмотреть больше
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
