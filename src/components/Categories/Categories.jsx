import React from "react";
import "./Categories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsFillHouseDoorFill, BsFillTreeFill } from "react-icons/bs";
import { MdApartment } from "react-icons/md";
import { SiBandsintown } from "react-icons/si";

const Categories = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={4} className="main">
      <SwiperSlide>

          <div className="slide__div">
            <div>
              <BsFillHouseDoorFill className="icon-house" />
            </div>
            <p>House</p>
          </div>

      </SwiperSlide>
      <SwiperSlide>

          <div className="slide__div">
            <div>
              <MdApartment className="icon-apartment" />
            </div>
            <p>Apartment</p>
          </div>

      </SwiperSlide>
      <SwiperSlide>

          <div className="slide__div">
            <div>
              <BsFillTreeFill className="icon-tree" />
            </div>
            <p>Land</p>
          </div>

      </SwiperSlide>
      <SwiperSlide>

          <div className="slide__div">
            <div>
              <SiBandsintown className="icon-town" />
            </div>
            <p>Town House</p>
          </div>

      </SwiperSlide>
    </Swiper>
  );
};

export default Categories;
