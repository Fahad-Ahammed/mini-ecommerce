import React from "react";
import Image from "next/image";
import products from "@/json/products-details.json";

const Index = () => {

  return (
    <div className={`py-[15px] w-[90%] mx-auto max-w-[1300px] `}>
      <p className="text-sm text-[#fff] font-[500] mb-[20px] ">Products</p>
      <div className="grid grid-cols-1 gap-y-[20px] sm:grid-cols-2 sm:gap-x-[20px] md:grid-cols-3 lg:grid-cols-4  ">
        {products?.map((product: any, index: any) => {
          return (
              <div key={index} className="bg-[#e3e3e3] shadow-lg w-full max-w-[390px] cursor-pointer rounded-md overflow-hidden mx-auto ">
                <div className="relative w-full h-[360px] sm:h-[200px]">
                  <Image
                    className="object-cover"
                    src={product?.thumbnail}
                    alt="prod"
                    fill
                  />
                </div>
                <div className="p-[10px]">
                  <p>{product?.title}</p>
                  <p className="capitalize">{product?.category}</p>
                  <p>{`${product?.rating}/5`}</p>
                  <p>{`$${product?.price}`}</p>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
