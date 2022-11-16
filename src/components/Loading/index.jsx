import React from 'react';
import logo from '../../assets/icons/logo-svg.png'
import loading from '../../assets/icons/loading.gif'
import './style.scss'

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="loading-page__content">
        <img className="loading-page__img" src={logo} alt="Logo" />
        <h1 className='loading-page__title'>SilkRoad Trip</h1>
        <img className='loading-page__gif' src={loading} alt="Loading" />
      </div>

    </div>
  );
};

export default Loading;