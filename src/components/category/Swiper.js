// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderCard from "./SliderCard";

const Slider = () => {
   const categories = [
      {
         id: 1,
         image: require("../../assets/images/yZzPy1564680897.jpg"),
         title: "رحلات جوّية",
      },
      {
         id: 2,
         image: require("../../assets/images/vertikal-zipline-cusco.jpg"),
         title: "رحلات برية",
      },
      {
         id: 3,
         image: require("../../assets/images/yZzPy1564680897.jpg"),
         title: "رحلات جوّية",
      },
      {
         id: 4,
         image: require("../../assets/images/vertikal-zipline-cusco.jpg"),
         title: "رحلات برية",
      },
   ];

   return (
      <Swiper
         spaceBetween={50}
         slidesPerView={"auto"}
         loop={true}
         centeredSlides={true}
         centeredSlidesBounds={true}
      >
         {categories.map((category) => {
            return (
               <SwiperSlide style={{ width: "600px" }} key={category.id}>
                  <SliderCard category={category} />
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default Slider;
