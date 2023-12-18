import React from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";

const Index = () => {
  const product = {
    id: 14,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description:
      "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    discountPercentage: 15.6,
    rating: 2,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/14/1.jpg",
      "https://i.dummyjson.com/data/products/14/2.jpg",
      "https://i.dummyjson.com/data/products/14/3.jpg",
      "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    ],
  };

  return (
    <div className="py-[50px] w-[90%] mx-auto max-w-[1300px] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] ">
        <div className="bg-[#f8f8f8] border flex shadow-lg p-[10px] max-h-[300px] w-full max-w-[500px] cursor-pointer rounded-md overflow-hidden mx-auto mb-[40px] xl:max-h-[200px]">
          <div className="relative w-[50%] max-w-[100px] h-[100px] ">
            <Image
              className="object-cover"
              src={product?.thumbnail}
              alt="prod"
              fill
            />
          </div>
          <div className="p-[10px] lg:px-[25px] ">
            <p className="text-[18px] max-w-[250px] leading-[22px] mb-[10px] lg:mb-[15px] font-[500]">
              {product?.title}
            </p>
            <div className="flex items-center gap-x-[15px] mb-[15px] lg:mb-[20px] ">
              <div className="flex font-[700] items-center w-[85px] justify-between  border border-[#BA0018]/40 rounded-md">
                <span className="px-[8px] text-[18px] leading-[32px] text-[gray] w-fit">
                  -
                </span>
                <p className="capitalize text-[16px] leading-[32px] text-[gray] w-fit ">
                  1
                </p>
                <span className=" px-[8px] text-[18px] leading-[32px] text-[gray] w-fit">
                  +
                </span>
              </div>
              <p className="text-[16px] font-[500] leading-[20px]">{`$${(
                product?.price *
                (1 - product?.discountPercentage / 100)
              ).toFixed(2)}`}</p>
            </div>
            <div className="flex items-center gap-x-[5px]">
              <FaTimes size={20} color="red" />
              <span>Remove</span>
            </div>
          </div>
        </div>
        <div className=" max-w-[500px] xl:max-w-[700px] mx-auto w-full">
          <p className="text-[18px] leading-[22px] font-[500] mb-[15px] ">
            Order summary
          </p>
          <div className="border shadow-md rounded-md bg-[#f8f8f8] ">
            <div className="p-[15px] pb-0 xl:p-[25px] xl:pb-0 ">
              <div className="pb-[8px] border-b-[2px] text-[18px] leading-[22px] flex items-center justify-between ">
                <p>Items subtotal</p>
                <p>2000</p>
              </div>
              <div className="py-[10px] text-[18px] border-b-[2px] leading-[22px] flex items-center justify-between ">
                <p>Tax</p>
                <p>2000</p>
              </div>
              <div className="py-[10px] text-[18px] font-[500] leading-[22px] flex items-center justify-between ">
                <p>Total</p>
                <p>2000</p>
              </div>
            </div>
            <button className="bg-[#BA0018] capitalize w-full rounded-b-md p-[15px] text-white ">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
