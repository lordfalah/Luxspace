import React, { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import ShoppingCart from "../../assets/icon/ShoppingCart";
import Container from "../../components/Container";
import { formatRupiah } from "../../helpers/format";
import { useInView } from "react-intersection-observer";

const HeroProduct = ({ data, navigation, selectImg, setSelectImg }) => {
  const { category, setCategory } = useOutletContext();
  const timeOut = useRef(null);

  const {
    ref: products,
    inView,
    entry,
  } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const addToCart = () => {
    const iconCart = document.querySelectorAll(".icon-cart");

    const check = category.findIndex((object) => object.id === data.id);
    if (check === -1) {
      setCategory([...category, data]);
    }

    iconCart.forEach((cart) => {
      if (cart.classList.contains("animate-shake")) {
        cart.classList.remove("animate-shake");

        timeOut.current = setTimeout(() => {
          cart.classList.add("animate-shake");
        }, 100);
      }
    });
  };

  const clearTouch = (e) => {
    if (timeOut.current !== null) {
      clearTimeout(timeOut.current);
    }
  };

  return (
    <section ref={products}>
      <Container className="px-4 sm:px-0">
        <main className="flex flex-col lg:flex-row lg:gap-x-10 xl:gap-x-14 2xl:gap-x-24 gap-y-5">
          <div className="space-y-3 block md:hidden">
            <h1 className="text-5xl font-semibold">{data?.title}</h1>
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-normal">
                Rp {formatRupiah(data?.price)}
              </h4>
              <button
                onClick={addToCart}
                onTouchEnd={clearTouch}
                onMouseLeave={clearTouch}
                type="button"
                className="rounded-full bg-pink-100 flex justify-center 
                items-center py-3 px-8 gap-x-4 transition duration-100 ease-linear hover:shadow-pick"
              >
                <ShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>

          <div
            className={`flex flex-col gap-y-5 md:flex-row-reverse md:gap-x-5 lg:gap-x-6 xl:gap-x-10 ${
              navigation?.state === "loading" ? "animate-pulse" : ""
            }`}
          >
            <div
              className={`h-80 overflow-hidden md:h-[600px] lg:w-[500px] md:w-full md:my-auto transition duration-300 delay-200 ease-in-out ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="object-cover bg-no-repeat h-full mx-auto"
                src={selectImg ? selectImg : data?.imgUrls[0]}
                alt=""
              />
            </div>

            <div
              className="flex gap-5 overflow-x-scroll w-full snap-x snap-mandatory md:snap-none md:snap-normal md:flex-col md:overflow-x-hidden md:w-36 lg:w-auto
            "
            >
              {data?.imgUrls.map((image, idx) => (
                <div
                  onClick={() => setSelectImg(image)}
                  key={idx}
                  style={{ transitionDelay: `${idx * 0.5}s` }}
                  className={`transition duration-150 ease-linear ${
                    inView
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-56 opacity-0"
                  } snap-center cursor-pointer w-32 h-32 md:w-28 md:h-28 flex flex-shrink-0 transition duration-150 ease-linear relative overflow-hidden box-border bg-black ${
                    image === selectImg
                      ? "border-2 border-solid border-black rounded-xl after:content-[''] after:absolute after:inset-0 after:bg-black/30 after:transition after:duration-200 after:ease-in-out"
                      : ""
                  }`}
                >
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    className="bg-cover bg-no-repeat w-full h-full bg-center after:content-[''] after:absolute after:inset-0 hover:after:bg-black/30  after:duration-200 after:ease-in-out after:scale-0 hover:after:scale-150 after:rounded-full"
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <article className="my-0 md:mb-8 md:mt-14 lg:my-0">
            <div className="space-y-1 hidden md:block">
              <h1 className="text-5xl font-semibold">{data?.title}</h1>
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-normal">
                  Rp {formatRupiah(data?.price)}
                </h4>
                <button
                  onClick={addToCart}
                  onTouchEnd={clearTouch}
                  onMouseLeave={clearTouch}
                  type="button"
                  className="btn-cart rounded-full bg-pink-100 flex justify-center 
                  items-center py-3 px-8 gap-x-4 transition duration-100 ease-linear hover:shadow-pick"
                >
                  <ShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>

            <hr className="block my-10 md:my-5" />

            <h4 className="font-semibold text-xl">About The Product</h4>
            <div
              className="space-y-5"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </article>
        </main>
      </Container>
    </section>
  );
};

export default HeroProduct;
