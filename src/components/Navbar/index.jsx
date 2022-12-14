import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiBookletLine } from "react-icons/ri";
import { CgKeyhole } from "react-icons/cg";
import { TbNews } from "react-icons/tb";
import { IoLanguageSharp } from "react-icons/io5";
import Dropdown from "../Dropdown";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-full text-4xl font-bold text-[#00df9a]">S-TRIP.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 flex  items-center gap-x-1.5">
          <CgKeyhole size={20} />
          Лайфхаки
        </li>
        <li className="p-4 flex  items-center gap-x-1.5">
          <RiBookletLine size={20} />
          Статьи
        </li>
        <li className="p-4 flex  items-center gap-x-1.5">
          <TbNews size={23} />
          Новости
        </li>
        <li
          onClick={() => setDropdown(!dropdown)}
          className="p-4  cursor-pointer"
        >
          <button className=" relative flex  items-center gap-x-1.5 bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-stone-900 hover:border-transparent rounded">
            <IoLanguageSharp size={20} />
            Языки
            <div className="absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
              {dropdown && <Dropdown />}
            </div>
          </button>
        </li>
        <li className="p-4">
          <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-6 border border-black-700 rounded py-2 px-4">
            Войти
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-4xl font-bold text-[#00df9a] m-4 text-[#00df9a]">
          S-TRIP.
        </h1>
        <li className="p-4 flex  items-center gap-x-1.5">
          <CgKeyhole size={20} />
          Лайфхаки
        </li>
        <li className="p-4 flex  items-center gap-x-1.5">
          <RiBookletLine size={20} />
          Статьи
        </li>
        <li className="p-4 flex  items-center gap-x-1.5">
          <TbNews size={23} />
          Новости
        </li>
        <li
          onClick={() => setDropdown(!dropdown)}
          className="p-4  cursor-pointer"
        >
          <button className=" relative flex  items-center gap-x-1.5 bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-white-900 hover:border-transparent rounded">
            <IoLanguageSharp size={20} />
            Языки
            <div className="absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
              {dropdown && <Dropdown />}
            </div>
          </button>
        </li>
        <li className="p-4">
          <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-6 border border-black-700 rounded py-2 px-4">
            Войти
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
