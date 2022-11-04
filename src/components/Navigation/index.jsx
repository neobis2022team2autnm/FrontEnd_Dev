import { TfiMapAlt } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import PhotoAlbumOutlinedIcon from "@mui/icons-material/PhotoAlbumOutlined";

const Navigation = () => {
  return (
    <div className=''>
      <div className="relative px-4">
        <ul className=" h-full w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  md:grid md:grid-cols-4  md:ml-auto md:px-4">
          
          <div className="inline-block">
            <li className="flex  items-center space-x-2 md:mr-2 bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 px-24  border border-[#607D8B] hover:border-transparent rounded-lg">
              <TfiMapAlt size={25} />
              <a className="text=xl text-[#607D8B] hover:text-white" src="#">
                Туры
              </a>
            </li>
          </div>
          <div className="inline-block">
            <li className="  flex space-x-2 md:mr-2  items-center bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 px-24 border border-[#607D8B] hover:border-transparent rounded-lg">
              <AiOutlineHome size={25} />
              <a className="text=xl text-[#607D8B] hover:text-white" src="#">
                Отели
              </a>
            </li>
          </div>
          <div className="inline-block">
            <li className=" flex space-x-2 md:mr-2  items-center bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 px-24 border border-[#607D8B] hover:border-transparent rounded-lg">
              <RestaurantOutlinedIcon size={30} />
              <a className="text=xl text-[#607D8B] hover:text-white" src="#">
                Рестораны
              </a>
            </li>
          </div>
          <div className="inline-block">
            <li className=" flex space-x-2 items-center  bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 justify-center border border-[#607D8B] hover:border-transparent rounded-lg">
              <PhotoAlbumOutlinedIcon size={30} />
              <a className="text=xl text-[#607D8B] hover:text-white" src="#">
                Альбом воспоминаний
              </a>
            </li>
          </div>
          <div className="inline-block">
            <li className=" flex space-x-2 items-center  bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 justify-center border border-[#607D8B] hover:border-transparent rounded-lg">
              <PhotoAlbumOutlinedIcon size={30} />
              <a className="text=xl text-[#607D8B] hover:text-white" src="#">
                Альбом воспоминаний
              </a>
            </li>
          </div>
          <div className="inline-block">
            <li className=" flex space-x-2 items-center  bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 justify-center border border-[#607D8B] hover:border-transparent rounded-lg">
              <PhotoAlbumOutlinedIcon size={30} />
              <a className="text=xl text-[#607D8B] hover:text-white" src="#">
                Альбом воспоминаний
              </a>
            </li>
          </div>
          <div className="inline-block">
            <li className=" flex space-x-2 items-center  bg-transparent hover:bg-[#9ca3af]  text-[#607D8B] font-semibold hover:text-white py-4 justify-center border border-[#607D8B] hover:border-transparent rounded-lg">
              <PhotoAlbumOutlinedIcon size={30} />
              <a className="text=xl text-[#607D8B] hover:text-white" src="#">
                Альбом воспоминаний
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
