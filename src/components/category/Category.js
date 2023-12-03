import style from "./category.module.css";
import Slider from "./Swiper";

export default function Category() {
   return (
      <div>
         <div className={style.titel}>
            <span className={style.viewMore}>View More</span>
            <h1>الأصناف</h1>
         </div>
         <div className={style.sliderContainer}>
            <Slider />
         </div>
      </div>
   );
}
