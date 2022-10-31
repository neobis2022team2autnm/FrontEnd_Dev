import { TfiMapAlt,} from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';

const Navigation = () => {
  return (
    <ul className="flex  mx-auto max-w-[1240px] px-4">
      <li className="flex items-center space-x-2 mr-2 bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-2 px-20 border border-[#607D8B] hover:border-transparent rounded-lg">
        <TfiMapAlt size={25} />
        <a className="text=xl text-[#607D8B] hover:text-white" src="#">
          Туры
        </a>
      </li>
      <li className="  flex space-x-2 mr-2  items-center bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-2 px-24 border border-[#607D8B] hover:border-transparent rounded-lg">
        <AiOutlineHome size={25} />
        <a className="text=xl text-[#607D8B] hover:text-white" src="#">
          Отели
        </a>
      </li>
      <li className=" flex space-x-2 mr-2  items-center bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 px-24 border border-[#607D8B] hover:border-transparent rounded-lg">
      <RestaurantOutlinedIcon size={30} />
        <a className="text=xl text-[#607D8B] hover:text-white" src="#">
          Рестораны
        </a>
      </li>
      <li className="flex-1 flex space-x-2 items-center  bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 justify-center border border-[#607D8B] hover:border-transparent rounded-lg">
        <PhotoAlbumOutlinedIcon size={30} />
        <a className="text=xl text-[#607D8B] hover:text-white" src="#">
          Альбом воспоминаний
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
