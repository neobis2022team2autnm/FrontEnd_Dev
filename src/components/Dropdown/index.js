//import React hooks
import React, { useState } from "react";

//import icons
import { RU, US } from "country-flag-icons/react/3x2";

// import styles
import "./style.scss";

function Dropdown() {

  const [dropdown, setDropdown] = useState(false);

  
  return (
    <>
      <ul
        className={
          dropdown
            ? "services-submenu clicked text-left border rounded"
            : "services-submenu"
        }
        onClick={() => setDropdown(!dropdown)}
      >
        <li>
          <button className="px-4 flex  items-center gap-x-1.5 py-1 hover:bg-gray-100 border-b text-black">
            <RU width={15} />
            Русский
          </button>
        </li>
        <li>
          <button className="px-4 flex  items-center gap-x-1.5 py-1 hover:bg-gray-100 border-b text-black">
            <US width={15} />
            English
          </button>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
