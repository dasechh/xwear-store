import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AssortmentSlide from "../AssortmentSlide";
import "./Carousel.css";

import "swiper/css";

export default function Carousel() {
  return (
    <section className="w-full">
      <Swiper
        className="h-157.75 w-full max-w-[1540px] rounded-[7px] max-2xl:h-[450px] max-md:h-[340px]"
        direction={"horizontal"}
        loop={true}
        mousewheel={true}
        slidesPerView={1}
        spaceBetween={24}
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-previous",
        }}
        lazyPreloadPrevNext={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: "swiper-dot",
          progressbarOpposite: true,
          bulletActiveClass: "swiper-dot-active",
        }}
        autoplay={{
          delay: 10000,
        }}
      >
        <SwiperSlide>
          <AssortmentSlide />
        </SwiperSlide>

        <SwiperSlide>
          <AssortmentSlide />
        </SwiperSlide>

        <SwiperSlide>
          <AssortmentSlide />
        </SwiperSlide>

        <SwiperSlide>
          <AssortmentSlide />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
