import React, { Fragment } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";

const itemsLink = [
  { name: "Home", path: "/" },
  { name: "Success Checkout", path: "/congratulation" },
];

const Congratulation = () => {
  const navigate = useNavigate("");
  return (
    <Fragment>
      <BreadCrumb itemsLink={itemsLink} className="px-4 sm:px-0 py-7 mt-20" />
      <section className="mt-0 md:mt-10">
        <Container>
          <img
            className="mx-auto"
            src="/images/content/illustration-success.png"
            alt="Success"
          />

          <div className="text-center">
            <h1 className="text-2xl font-semibold">Ah yes it’s success!</h1>
            <div className="text-lg my-4 w-4/5 mx-auto">
              <p>Furniture yang anda beli akan kami kirimkan saat ini juga</p>
              <p>so now please sit tight and be ready for it</p>
            </div>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="btn-cart rounded-full bg-[#F9CADA] flex justify-center 
                  items-center py-3 px-8 gap-x-4 transition duration-100 ease-linear hover:shadow-pick mx-auto  mt-12"
            >
              <span className="font-medium">Back to Shop</span>
            </button>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Congratulation;
