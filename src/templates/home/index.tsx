import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import { useSelector } from "react-redux";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addToCart = (product: any) => {
    dispatch(add(product));
  };
  const products = useSelector((state: any) => state?.filteredProducts);

  return (
    <div
      className={`py-[15px] md:py-[40px]  w-[90%] mx-auto max-w-[1300px] `}
    >
      <p className="text-sm font-[500] mb-[20px] ">Products</p>
      {products?.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-[20px] sm:grid-cols-2 sm:gap-x-[20px] md:grid-cols-3 lg:grid-cols-4  ">
          {products?.map((product: any, index: any) => {
            return (
              <div
                onClick={(e: any) => {
                  e.stopPropagation();
                  router?.push(`/products/${product?.id}`);
                }}
                key={index}
                className="bg-[#F7F5F2] shadow-lg w-full max-w-[390px] cursor-pointer rounded-md overflow-hidden mx-auto "
              >
                <div className="relative w-full h-[360px] sm:h-[200px]">
                  <Image
                    className="object-cover"
                    src={product?.thumbnail}
                    alt="prod"
                    fill
                  />
                </div>
                <div className="p-[15px]">
                  <p className="text-[18px] leading-[28px] md:text-[16px] md:leading-[20px] mb-[5px] font-[500] text-ellipsis line-clamp-1">
                    {product?.title}
                  </p>
                  <p className="capitalize text-[10px] leading-[14px] px-[10px] py-[5px] text-[gray] w-fit border border-[#BA0018]/40 rounded-md mb-[5px]">
                    {product?.category}
                  </p>
                  <div className="flex items-center gap-x-[2px] mb-[5px] ">
                    {[...Array(product?.rating)].map((_, index) => (
                      <FaStar key={index} size={10} color="red" />
                    ))}
                  </div>
                  <div className="flex items-center gap-x-[5px] mb-[15px] text-[15px] leading-[20px] lg:text-[14px] lg:leading-[18px] ">
                    <p>{`$${(
                      product?.price *
                      (1 - product?.discountPercentage / 100)
                    ).toFixed(2)}`}</p>
                    <p className="line-through text-gray-500">{`$${product?.price}`}</p>
                    <p className="text-[#BA0018] ">{`(${product?.discountPercentage}% OFF)`}</p>
                  </div>
                  <button
                    onClick={(e: any) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="text-[14px] w-full leading-[28px] xl:hover:bg-[#BA0018] xl:hover:text-white duration-300 w-fi ease-in-out border border-[#BA0018] rounded-md px-[10px] py-[5px] text-center "
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[calc(100vh-200px)] flex justify-center items-center " >No items found</div>
      )}
    </div>
  );
};

export default Index;
