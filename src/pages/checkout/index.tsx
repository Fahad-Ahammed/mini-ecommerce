import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {removeAll} from '../../store/cartSlice'
import Link from "next/link";
import {useRouter} from 'next/router'

const Index = () => {
  const totalPrice = useSelector((state: any) => state?.cart?.totalPrice);
  const dispatch =useDispatch();
    const router =useRouter()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    creditCard: "",
  });
  const [error, setError] = useState(false);
  const [successCheckout, setSuccessChekout] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value.trim() === "")) {
      setError(true);
      return;
    }
    dispatch(removeAll(undefined))
    setSuccessChekout(true);
  };

  useEffect(() => {
    setError(false);
  }, [formData]);

  return (
    <div className="w-[90%] mx-auto max-w-[1300px]">
      {!(totalPrice == 0) ? (
        <div className="py-[70px] flex justify-center items-center">
          {successCheckout ? (
            <div className="w-full max-w-[450px] text-center bg-[#BA0018] p-[30px] rounded-md shadow-md">
              <p className="text-[24px] leading-[32px] font-[500] text-white">
                🎉 Order placed successfully! Thank you for your purchase. 🎉
              </p>
              <Link
                href="/"
                className="mt-[20px] block px-[20px] py-[10px] bg-white text-[#BA0018] font-[500] rounded-md hover:bg-gray-200"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form
              noValidate
              className="w-full max-w-[450px] bg-white p-[30px] rounded-md shadow-md"
              onSubmit={handleSubmit}
            >
              <h2 className="text-[24px] leading-[32px] font-semibold mb-[25px] text-center">
                Checkout
              </h2>
              <div className="mb-[15px]">
                <label
                  htmlFor="name"
                  className="block text-[14px] leading-[20px] font-[500] text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-[5px] p-[10px] w-full border rounded-md focus:outline-none focus:border-[black] "
                />
              </div>

              <div className="mb-[15px]">
                <label
                  htmlFor="email"
                  className="block text-[14px] leading-[20px] font-[500] text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-[5px] p-[10px] w-full border rounded-md focus:outline-none focus:border-[black]"
                />
              </div>

              <div className="mb-[15px]">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-[5px] p-[10px] w-full border rounded-md focus:outline-none focus:border-[black]"
                ></textarea>
              </div>

              <div className="mb-[15px]">
                <label
                  htmlFor="creditCard"
                  className="block text-[14px] leading-[20px] font-[500] text-gray-600"
                >
                  Credit Card
                </label>
                <input
                  type="text"
                  id="creditCard"
                  name="creditCard"
                  value={formData.creditCard}
                  onChange={handleChange}
                  className="mt-[5px] p-[10px] w-full border focus:border-[black] rounded-md focus:outline-none"
                  placeholder="**** **** **** ****"
                />
              </div>

              <div className="mb-[15px]">
                <p className="mt-[5px] p-[10px w-full rounded-md">
                  {`Total Amount: $${totalPrice}`}
                </p>
              </div>

              {error && (
                <div className="text-[16px] leading-[22px] text-[#BA0018] ">
                  Please fill all fields
                </div>
              )}

              <div className="flex items-center mt-[30px]">
                <button
                  type="submit"
                  className="bg-[#BA0018]/90 duration-300 ease-in-out focus:outline-none text-white py-[10px] font-[500] w-full px-[16px] rounded-md hover:bg-[#BA0018]"
                >
                  Place Order
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div className="h-[calc(100vh-200px)] flex justify-center items-center">
          Nothing to checkout
        </div>
      )}
    </div>
  );
};

export default Index;
