import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";
import arrow from "../../assets/icons/arrows/arrow-black.svg";
import "swiper/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProductCarouselProps {
  category: string;
  carouselName: string;
}

export default function ProductCarousel({
  category,
  carouselName,
}: ProductCarouselProps) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${category}?limit=16&sort=desc`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category]);

  return (
    <section className="flex w-full flex-col items-center">
      <div className="flex items-center justify-between max-md:mb-3.75 md:mb-6.25 2xl:mb-9.5">
        <h2>{carouselName}</h2>
        <Link
          to={`/catalog/${category}`}
          className="flex flex-row gap-2.5 border-b-2 border-black pb-1.25 font-[RF-Dewi] text-sm leading-[1.4375rem] font-[800] whitespace-nowrap uppercase max-md:text-xs"
        >
          <span>больше</span>
          <span className="max-md:hidden">товаров</span>
          <img src={arrow} alt="" aria-hidden="true" />
        </Link>
      </div>
      <Swiper
        className="relative h-[521px] w-full max-w-[1362px] max-2xl:mb-10 max-2xl:h-[488px] max-md:h-[333px] md:px-7.5 2xl:mb-15 2xl:px-20"
        direction={"horizontal"}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".product-carousel-next",
          prevEl: ".product-carousel-prev",
        }}
        lazyPreloadPrevNext={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: "product-carousel-dot",
          bulletActiveClass: "product-carousel-dot-active",
          el: ".product-carousel-pagination",
        }}
        breakpoints={{
          0: {
            spaceBetween: 20,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-row gap-11.25 whitespace-nowrap">
        <button className="product-carousel-prev">
          <img src={arrow} alt="Предыдущий слайд" className="rotate-y-180" />
        </button>
        <div className="product-carousel-pagination flex items-center">
          <div className="product-carousel-dot h-1.5 w-1.5 rounded-full bg-black opacity-70"></div>
          <div className="prodict-carousel-dot-active h-2.5 w-2.5 rounded-full bg-black opacity-100"></div>
        </div>
        <button className="product-carousel-next">
          <img src={arrow} alt="Следующий слайд" />
        </button>
      </div>
    </section>
  );
}
