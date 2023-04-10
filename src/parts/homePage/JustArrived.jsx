import React, { Fragment, Suspense } from "react";
import {
  Await,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Slider from "react-slick";
import Eye from "../../assets/icon/Eye";
import Container from "../../components/Container";
import { customSlickSett, formatRupiah } from "../../helpers/format";
import useLongPress from "../../helpers/hooks/useLongPress";

const settings = customSlickSett(
  {
    slidesToShow: 4.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  },
  {
    slidesToShow: 3.4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  },
  {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  },

  {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  },

  {
    slidesToShow: 1.6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  },

  {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }
);

const Loadings = () => {
  return (
    <p className="text-5xl text-black font-bold">Loading package location...</p>
  );
};

const JustArrived = () => {
  const { data: products } = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate("");

  const onLongPress = () => {
    return null;
  };

  const onClick = (id) => navigate(`products/${id}`);

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 120,
  };
  const longPressEvent = (id) => {
    return useLongPress(onLongPress, () => onClick(id), defaultOptions);
  };
  return (
    <section className="pt-16" id="just-arrived">
      <Container className="mb-4">
        <div className="text-center capitalize text-2xl font-semibold">
          <h3>Just Arrived</h3>
          <h3>This Summer For You</h3>
        </div>
      </Container>

      <Slider {...settings}>
        {products.map((data) => (
          <div
            {...longPressEvent(data.id)}
            key={data.id}
            to={`products/${data?.id}`}
            className={`card relative z-30 px-4 group hover:cursor-grab focus:cursor-grabbing ${
              navigation.state === "loading" ? "animate-pulse" : ""
            }`}
          >
            <div className="w-[280px] h-[386px] relative rounded-xl overflow-hidden group-hover:shadow-lg transition duration-200 ease-in-out mx-auto">
              <div
                style={{ backgroundImage: `url(${data.imageUrl})` }}
                className="w-full h-full bg-cover bg-no-repeat bg-center group-hover:scale-125 transition duration-300 ease-in-out"
              ></div>

              <div className="transition duration-200 ease-in-out absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/[35%] w-full h-full flex justify-center items-center">
                <div className="rounded-full bg-white w-16 h-16 flex justify-center items-center">
                  <Eye className="w-10 h-10" />
                </div>
              </div>
            </div>

            <div className="mt-4 w-[280px] mx-auto">
              <h5 className="text-lg font-semibold">{data.title}</h5>
              <p>Rp {formatRupiah(data.price)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default JustArrived;
