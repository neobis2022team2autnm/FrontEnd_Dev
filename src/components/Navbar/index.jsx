//import React and additional dependensice
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//import Redux dependencies
import { useDispatch, useSelector } from "react-redux";
//import components
import Dropdown from "../Dropdown";
import ModalPopap from "../Modal-popap";
import Singin from "../Singin";

//import icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiBookletLine } from "react-icons/ri";
import { CgKeyhole } from "react-icons/cg";
import { TbNews } from "react-icons/tb";
import { IoLanguageSharp } from "react-icons/io5";

//import assets
import logo from "../../assets/icons/logo-svg.png";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
//import { is } from "immer/dist/internal";

import "./style.scss";

const Navbar = () => {

  const { t } = useTranslation()
  //Code with redux toolkit
  const { isLogged, user } = useSelector((state) => state.general);

  //all states
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  //console.log(modalActive)

  //all functionality
  const handleNav = () => {
    setNav(!nav);
  };
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center h-24  px-4 text-black">
      <Link to="/" className="w-full text-4xl font-bold text-[#00df9a]">
        S-TRIP.
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4 flex  items-center gap-x-1.5">
          <CgKeyhole size={20} />
          {t('lifeHacks')}
        </li>
        <li className="p-4 flex  items-center gap-x-1.5">
          <RiBookletLine size={20} />
          {t('blog')}
        </li>
        <Link path='/plan'>  <li className="p-4 flex cursor-pointer items-center gap-x-1.5">
          <TbNews size={23} />
          {t('news')}
        </li> </Link>
        
        <li
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          className="p-4  cursor-pointer"
        >
          <button className=" relative flex  items-center gap-x-1.5 bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-stone-900 hover:border-transparent rounded">
            <IoLanguageSharp size={20} />
            {t('language')}
            <div
              // style={{ width: "100%", height: "100%" }}
              className="z-10 hiiden group absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded"
            >
              {dropdown && <Dropdown />}
            </div>
          </button>
        </li>
        <li className="p-4">
          <button
            onClick={() => {
              setModalActive(true);
              dispatch(isLogged(true));
            }}
            className="bg-black hover:bg-black-700 text-white font-bold py-2 px-6 border border-black-700 rounded py-2 px-4"
          >
            {t('login')}
          </button>
        </li>
      </ul>

      {
        <ModalPopap logo={logo} active={modalActive} setActive={setModalActive}>
          <Singin active={modalActive} setActive={setModalActive} />
        </ModalPopap>
      }
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500"
            : "z-50 ease-in-out duration-500 fixed left-[-100%] z-50"
        }
      >
        <h1 className="w-full text-4xl font-bold text-[#00df9a] m-4 text-[#00df9a]">
          S-TRIP.
        </h1>
        <li className="p-4 flex  items-center gap-x-1.5">
          <CgKeyhole size={20} />
          {t('lifeHacks')}
        </li>
        <li className="p-4 flex  items-center gap-x-1.5">
          <RiBookletLine size={20} />
          {t('blog')}
        </li>
        <li className="p-4 flex  items-center gap-x-1.5">
          <TbNews size={23} />
          {t('news')}
        </li>
        <li
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
          className="p-4  cursor-pointer"
        >
          <button className=" relative flex  items-center gap-x-1.5 bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-white-900 hover:border-transparent rounded">
            <IoLanguageSharp size={20} />
            {t('language')}
            <div className="absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
              {dropdown && <Dropdown />}
            </div>
          </button>
        </li>
        <li className="p-4">
          <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-6 border border-black-700 rounded py-2 px-4">
          {t('login')}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
