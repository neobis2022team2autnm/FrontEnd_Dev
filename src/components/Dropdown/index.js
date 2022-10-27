import React, { useRef, useState } from "react";
import { KG, RU, US } from "country-flag-icons/react/3x2";
//import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import "./style.scss";

function Dropdown() {
  // const header = useRef();
  const [dropdown, setDropdown] = useState(false);
  //useOnClickOutside(header, () => setDropdown(false));
  return (
    <>
      <ul
        //  ref={header}
        className={
          dropdown
            ? "services-submenu clicked text-left border rounded"
            : "services-submenu"
        }
        onClick={() => setDropdown(!dropdown)}
      >
     
        <li>
          <button
            className="px-4 flex  items-center gap-x-1.5 py-1 hover:bg-gray-100 border-b text-black"
            onClick={() => setDropdown(false)}
          >
            <KG width={15} />
            Кыргызча
          </button>
        </li>
        <li>
          <button
            className="px-4 flex  items-center gap-x-1.5 py-1 hover:bg-gray-100 border-b text-black"
            onClick={() => setDropdown(false)}
          >
            <RU width={15} />
            Русский
          </button>
        </li>
        <li>
          <button
            className="px-4 flex  items-center gap-x-1.5 py-1 hover:bg-gray-100 border-b text-black"
            onClick={() => setDropdown(false)}
          >
            <US width={15} />
            English
          </button>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
