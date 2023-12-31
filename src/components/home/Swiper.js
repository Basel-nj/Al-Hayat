// import Swiper core and required modules
import image1 from "../../assets/images/Honeymoon-Places-in-December-in-India.jpg";
import image2 from "../../assets/images/family-travel.jpg";
import style from "./home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ getActiveIndex }) => {
   const content = [
      {
         id: 1,
         image: image1,
         title: "UNFORGETTABLE HONEYMOON",
         bg: "image1",
      },
      {
         id: 2,
         image: image2,
         title: "YOUR FAMILY NEEDS A VACATION",
         bg: "image2",
      },
      {
         id: 3,
         image: image1,
         title: "UNFORGETTABLE HONEYMOON",
         bg: "image1",
      },
      {
         id: 4,
         image: image2,
         title: "YOUR FAMILY NEEDS A VACATION",

         bg: "image2",
      },
   ];

   return (
      <Swiper
         spaceBetween={120}
         slidesPerView={"auto"}
         loop={true}
         centeredSlides={true}
         centeredSlidesBounds={true}
         onSlideChangeTransitionEnd={(swiper) => {
            console.log(swiper.realIndex);
            getActiveIndex(content[swiper.realIndex].bg);
         }}
      >
         {content.map((element) => {
            return (
               <SwiperSlide style={{ width: "1200px" }} key={element.id}>
                  <div className={style.card}>
                     <img src={element.image} alt="" />
                     <h3>{element.title}</h3>
                  </div>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default Slider;
