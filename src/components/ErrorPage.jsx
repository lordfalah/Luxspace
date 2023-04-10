import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Container from "./Container";

const ErrorPage = ({ nameImg, description }) => {
  const navigate = useNavigate();
  const status = useRouteError();
  return (
    <section>
      <Container>
        <div className="mt-48">
          <div className="mx-auto w-fit text-center">
            <h1 className="text-3xl font-semibold">
              {status?.data ? status?.error?.message : "Product not found"}
            </h1>
            <p className="text-lg my-6">
              {status?.response?.data?.errors?.message || status?.message}
            </p>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="btn-cart rounded-full bg-[#F9CADA] flex justify-center 
                  items-center py-3 px-8 gap-x-4 transition duration-100 ease-linear hover:shadow-pick mx-auto"
            >
              <span>{description}</span>
            </button>
          </div>
          <div className="mt-8">
            <img
              className="mx-auto w-full lg:w-3/5 xl:w-1/2"
              src={`/images/content/${nameImg}`}
              alt="not found"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ErrorPage;
