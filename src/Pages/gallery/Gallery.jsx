import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "./Gallery.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
export const Gallery = () => {
  return (
    <div className="swiper-container">
      <SectionTitle
        title="Gallery"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={-5}
        initialSlide={2}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" my-lg-4">
            <img
              className="slide-img w-75"
              src="/imgs/gallery/gallery-1.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img
              className="slide-img w-75"
              src="/imgs/gallery/gallery-2.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img
              className="slide-img w-75"
              src="/imgs/gallery/gallery-3.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" my-4">
            <img
              className="slide-img w-75"
              src="/imgs/gallery/gallery-4.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img
              className="slide-img w-75"
              src="/imgs/gallery/gallery-5.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img
              className="slide-img w-75"
              src="/imgs/gallery/gallery-6.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img
              className="slide-img w-75"
              src="/imgs/gallery/gallery-7.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" my-4">
            <img
              className="slide-img w-75"
              src="/imgs/gallery/gallery-8.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
