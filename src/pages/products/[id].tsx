import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import useOnResize from "@/custom-hooks/useOnResize";

const Index = () => {
  const { width } = useOnResize();
  const isMobile = width > 767;
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    setShowArrow(isMobile);
  }, [isMobile]);

  const NextArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className={`absolute z-[4] ${
        showArrow ? "block" : "hidden"
      } left-[52%]  xl:bottom-[-100px] bottom-[-80px]  transform -translate-y-1/2 bg-[#f8f8f8] rounded-lg px-[20px] py-[15px] shadow-md text-white`}
    >
      <FaArrowRight size={20} color="#BA0018" className=" " />
    </button>
  );

  const PrevArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className={`absolute z-[4]  ${
        showArrow ? "block" : "hidden"
      } xl:bottom-[-100px] right-[52%] bottom-[-80px] transform -translate-y-1/2 bg-[#f8f8f8] rounded-lg py-[15px] px-[20px] shadow-md text-white`}
    >
      <FaArrowLeft size={20} color="#BA0018" className="" />
    </button>
  );
  const settings = {
    dots: showArrow ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const data = {
    id: 12,
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/12/1.jpg",
      "https://i.dummyjson.com/data/products/12/2.jpg",
      "https://i.dummyjson.com/data/products/12/3.png",
      "https://i.dummyjson.com/data/products/12/4.jpg",
      "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    ],
  };
  const images = [
    "https://i.dummyjson.com/data/products/12/1.jpg",
    "https://i.dummyjson.com/data/products/12/2.jpg",
    "https://i.dummyjson.com/data/products/12/3.png",
    "https://i.dummyjson.com/data/products/12/4.jpg",
    "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
  ];
  return (
    <div className="w-[90%] mx-auto max-w-[1300px] py-[30px] md:h-[calc(100vh-55px)]">
      <div className="md:flex gap-x-[30px]">
        <div className="md:w-[50%]">
          <Slider {...settings}>
            {images?.map((image: any, index: any) => {
              return (
                <div
                  className="shadow-md w-full h-[360px] border relative rounded-md overflow-hidden"
                  key={index}
                >
                  <Image className="object-cover " src={image} alt="alt" fill />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="mt-[35px] md:mt-[20px] md:w-[50%]">
          <p className="text-[20px] md:text-[24px] md:leading-[32px] capitalize mb-[5px] leading-[24px] font-[500]  ">
            {data?.title}
          </p>
          <p className="text-[16px] leading-[20px] md:text-[20px] md:leading-[28px] text-gray-500 mb-[15px]">
            {data?.description}
          </p>
          <p className="capitalize text-[10px] md:text-[14px] md:py-[10px] leading-[14px] px-[10px] py-[5px] text-[gray] w-fit border border-[#BA0018]/40 rounded-md mb-[5px] md:mb-[10px]">
            {data?.category}
          </p>
          <div className="flex items-center gap-x-[2px] mb-[5px] md:mb-[10px] ">
            {[...Array(data?.rating)].map((_, index) => (
              <FaStar
                key={index}
                className="w-[10px] md:w-[15px] md:h-[15px] h-[10px] "
                color="red"
              />
            ))}
          </div>
          <div className="flex items-center gap-x-[5px] mb-[15px] text-[15px] leading-[20px] md:text-[20px] md:leading-[26px] ">
            <p>{`$${(
              data?.price *
              (1 - data?.discountPercentage / 100)
            ).toFixed(2)}`}</p>
            <p className="line-through text-gray-500">{`$${data?.price}`}</p>
            <p className="text-[#BA0018] ">{`(${data?.discountPercentage}% OFF)`}</p>
          </div>
          <p className="text-[14px] cursor-pointer self-end leading-[28px] xl:hover:bg-[#BA0018] xl:hover:text-white duration-300 w-fi ease-in-out border md:w-fit border-[#BA0018] rounded-md px-[10px] py-[5px] text-center">
            Buy Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
