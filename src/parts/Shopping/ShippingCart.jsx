import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import api from "../../api/baseApi";

const ShippingCart = () => {
  const { category } = useOutletContext();
  const [checkout, setCheckout] = useState({
    isLoading: false,
    isError: false,
    message: "",
    datas: {},
    isSuccsess: false,
  });
  const [form, setForm] = useState({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    couriers: 0,
    payment: 0,
  });
  const navigate = useNavigate("");

  const validatorForm =
    category.length <= 0 ||
    Object.values(form).some((val) => val === "" || val === 0);

  const handleInput = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (!validatorForm) {
      try {
        const response = await api.post("/checkout", form);
        if (response.status === 201) {
          navigate("/congratulation");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const checkoutProduct = async () => {
    setCheckout((prev) => ({ ...prev, isLoading: true }));
    try {
      const { data } = await api.get("/checkout/meta");
      setCheckout((prev) => ({ ...prev, datas: data }));
      return data;
    } catch (error) {
      setCheckout((prev) => ({ ...prev, isError: true }));
      throw new Response(error.statusText || error.message);
    } finally {
      setCheckout((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    checkoutProduct();
  }, []);

  return (
    <div className="px-4 space-y-4 py-8 bg-[#F9F9F9] w-full md:w-2/5 rounded-sm md:rounded-[20px] md:px-5">
      <h4 className="font-sans font-normal text-[26px] md:text-[22px] lg:text-[26px]">
        Shipping Details
      </h4>

      <form action="POST" onSubmit={handleForm} className="space-y-4">
        <div className="space-y-2">
          <p className="font-sans text-sm font-normal">Complete Name</p>
          <label htmlFor="name" className="block w-full h-full">
            <input
              onChange={handleInput}
              autoComplete="off"
              required
              type="text"
              id="name"
              name="completeName"
              className="border appearance-none focus:outline-none py-2 px-4 w-full focus:ring-inset focus:ring-2 focus:ring-blue-300 rounded-[10px]"
            />
          </label>
        </div>

        <div className="space-y-2">
          <p className="font-sans text-sm font-normal">Email Address</p>
          <label htmlFor="email" className="block w-full h-full">
            <input
              onChange={handleInput}
              autoComplete="off"
              required
              type="email"
              id="email"
              name="emailAddress"
              className="border appearance-none focus:outline-none py-2 px-4 w-full focus:ring-inset focus:ring-2 focus:ring-blue-300 rounded-[10px]"
            />
          </label>
        </div>

        <div className="space-y-2">
          <p className="font-sans text-sm font-normal">Address</p>
          <label htmlFor="address" className="block w-full h-full">
            <input
              onChange={handleInput}
              autoComplete="off"
              required
              type="address"
              id="address"
              name="address"
              className="border appearance-none focus:outline-none py-2 px-4 w-full focus:ring-inset focus:ring-2 focus:ring-blue-300 rounded-[10px]"
            />
          </label>
        </div>

        <div className="space-y-2">
          <p className="font-sans text-sm font-normal">Phone Number</p>
          <label htmlFor="phone" className="block w-full h-full">
            <input
              onChange={handleInput}
              autoComplete="off"
              required
              type="text"
              id="phone"
              name="phoneNumber"
              className="border appearance-none focus:outline-none py-2 px-4 w-full focus:ring-inset focus:ring-2 focus:ring-blue-300 rounded-[10px]"
            />
          </label>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <p className="font-sans text-sm font-normal">Choose Courier</p>
            <div className="flex gap-x-5">
              {checkout?.isLoading
                ? [1, 2].map((val) => (
                    <div
                      key={val}
                      className="shadow rounded-md w-full h-20 bg-gray-300 animate-pulse"
                    ></div>
                  ))
                : checkout?.datas?.couriers?.map(({ id, name, imgUrl }) => (
                    <button
                      key={id}
                      onClick={() =>
                        setForm((prev) => ({ ...prev, couriers: id }))
                      }
                      type="button"
                      className={`bg-white rounded-[10px] w-full h-20 flex items-center justify-center transition duration-150 ease-in-out ${
                        id === form.couriers ? "shadow-md" : "shadow"
                      }`}
                    >
                      <img src={imgUrl} alt={name} />
                    </button>
                  ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-sans text-sm font-normal">Choose Payment</p>
            <div className="grid gap-5 grid-cols-2">
              {checkout?.isLoading
                ? [1, 2, 3, 4].map((val) => (
                    <div
                      key={val}
                      className="shadow rounded-md w-full h-20 bg-gray-300 animate-pulse"
                    ></div>
                  ))
                : checkout?.datas?.payments?.map(({ name, imgUrl }, idx) => (
                    <button
                      onClick={() =>
                        setForm((prev) => ({ ...prev, payment: idx + 1 }))
                      }
                      type="button"
                      key={`${idx}:${name}`}
                      className={`bg-white rounded-[10px] w-full h-20 flex items-center justify-center ${
                        idx + 1 === form.payment ? "shadow-md" : "shadow"
                      }`}
                    >
                      <img src={imgUrl} alt={name} />
                    </button>
                  ))}
            </div>
          </div>
        </div>

        <div
          className={`${
            validatorForm ? "bg-[#F0F0F0]" : "bg-[#F9CADA]"
          } w-full rounded-full text-center !mt-8 transition duration-150 ease-linear`}
        >
          <button
            type="submit"
            disabled={validatorForm ? true : false}
            className={`font-medium text-lg font-sans px-6 py-3 ${
              validatorForm
                ? "cursor-not-allowed text-[#D2D2D2]"
                : "cursor-pointer text-black"
            }`}
          >
            Checkout Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingCart;
