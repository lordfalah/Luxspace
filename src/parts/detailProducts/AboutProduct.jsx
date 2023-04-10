import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Container from "../../components/Container";
import { customSlickSett, formatRupiah } from "../../helpers/format/index.js";
import useLongPress from "../../helpers/hooks/useLongPress";

const settings = customSlickSett(
  { slidesToShow: 4, slidesToScroll: 4 },
  {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    dots: true,
  },
  {
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    dots: true,
  },

  {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    dots: true,
  },

  {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    dots: true,
  },

  {
    slidesToShow: 1.5,
    slidesToScroll: 1.5,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    dots: true,
  }
);

const AboutProduct = ({ data }) => {
  const navigate = useNavigate("");

  const onLongPress = () => {
    return null;
  };

  const onClick = (id) => {
    const html = document.querySelector("html");
    html.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    navigate(`/products/${id}`);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 100,
  };
  const longPressEvent = (id) => {
    return useLongPress(onLongPress, () => onClick(id), defaultOptions);
  };

  return (
    <section className="bg-gray-100 my-20 py-16">
      <Container className="px-4 space-y-4">
        <div className="font-semibold text-2xl">
          <h3>Complete Your Room</h3>
          <h3>With What We Designed</h3>
        </div>

        <Slider {...settings}>
          {data?.relatedProducts.map(({ imageUrl, id, title, price }) => (
            <div
              {...longPressEvent(id)}
              key={id}
              className="rounded-lg bg-white px-4 pt-4 pb-6 cursor-grab hover:cursor-grab focus:cursor-grabbing"
            >
              <div
                className="h-40  origin-center bg-cover bg-no-repeat rounded-lg"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
              <div>
                <h5 className="font-semibold text-lg">{title}</h5>
                <p>Rp {formatRupiah(price)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default AboutProduct;
