import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useOnResize from "@/custom-hooks/useOnResize";
import { useSelector } from "react-redux";
import Link from "next/link";
import { searchProducts } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Index = () => {
  const { width } = useOnResize();
  const isMobile = width > 1024;
  const headerRef = useRef(null);
  const [isScrolling, setScrolling] = useState(false);
  const cartProducts = useSelector((state: any) => state?.cart?.products);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  useEffect(() => {});

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(searchProducts(value));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full ${
        isScrolling ? "bg-white shadow-md " : "bg-[#BA0018]"
      } duration-300 ease-in-out z-[5]`}
    >
      <div className="w-[90%] mx-auto max-w-[1300px] ">
        <div className="flex items-center h-[55px] lg:h-[65px] ">
          <div className="w-full flex items-center justify-center">
            <Link
              href="/"
              className={`text-lg ${
                isScrolling ? "text-gray-700" : "text-white "
              } `}
            >
              FSH
            </Link>
            <div className="ml-auto flex gap-x-[10px] items-center justify-end ">
              {router.pathname == "/" && (
                <form className="max-w-[70%]">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className={`"w-[12px] h-[12px] text-whit  ${
                          isScrolling ? "text-gray-500" : "text-white "
                        } `}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      onChange={handleInputChange}
                      className={`block w-full p-[5px] ps-8 text-sm  border  rounded-[8px]  outline-none ${
                        isScrolling
                          ? "text-gray-900 border-gray-300 bg-gray-50"
                          : "text-white placeholder:text-white border-white bg-transparent"
                      } `}
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              )}
              <Link href="/cart" className="relative">
                <FaShoppingCart
                  size={25}
                  style={{
                    fill: "none",
                    stroke: isScrolling ? "grey" : "white",
                    strokeWidth: 15,
                  }}
                />
                <div
                  className={`absolute top-[-3px] right-[-5px] w-[15px] h-[15px] rounded-full text-[9px] leading-[200px] flex justify-center items-center ${
                    isScrolling
                      ? "bg-red-500 text-white "
                      : "text-[#BA0018] bg-white "
                  }  `}
                >
                  {cartProducts?.length}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
