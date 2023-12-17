import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

const index = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border border-l-0 border-r-0 z-[5]">
      <div className="w-[90%] mx-auto max-w-[1300px] ">
        <div className="flex items-center h-[50px] lg:h-[60px] ">
          <div className="w-full flex items-center justify-center">
            <p className="text-lg" >FSH</p>
            <div className="ml-auto flex gap-x-[10px] items-center justify-end ">
              <form className="max-w-[70%]">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-[12px] h-[12px] text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className={`block w-full p-[5px] ps-8 text-sm text-gray-900 border border-gray-300 rounded-[8px] bg-gray-50 outline-none`}
                    placeholder="Search"
                    required
                  />

                </div>
              </form>
              <div className="relative" >
                <FaShoppingCart size={25} style={{ fill:'none', stroke: 'black', strokeWidth: 15 }} />
                <div className="absolute top-[-3px] right-[-5px] w-[15px] h-[15px] rounded-full bg-red-500 text-[9px] leading-[200px] flex justify-center items-center text-white" >5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
