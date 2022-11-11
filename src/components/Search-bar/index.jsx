import { BiSearchAlt2 as Search } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const SearchBar = () => {
  const { t } = useTranslation()
  return (
    <div className="mt-10">
      <div className=" my-45 h-[40vh] w-[100%] mx-auto sm:w-[92%] md:w-[100%] lg:px-7 relative">
        <img
          className="object-cover md:object-fill h-[100%]  w-[100%]"
          src="https://img.freepik.com/free-vector/watercolor-style-blue-mountains-with-pink-sky_23-2149250278.jpg?w=1380&t=st=1667903781~exp=1667904381~hmac=9b17cf0555193e882a90e696e54c1ff370bc6bfb49ab3dd4d7ec7edc3d97411a"
        />

        <div class="flex justify-center  absolute z-10 w-[100%] top-[45%]">
          <div class="w-[80%] ">
            <div class="input-group relative  w-[100%] group">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full text-center shadow-2xl  py-3 px-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder={t('lets_travel')}
              />
              <Search className="text-lg text-gray-700 pointer-events-none top-[30%] left-[3%] opacity-80 absolute group-focus-within:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
