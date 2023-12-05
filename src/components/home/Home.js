import style from "./home.module.css";
import logo from "../../assets/icons/svg/logoo.svg";
import menueIcon from "../../assets/icons/svg/burger-menu-svgrepo-com.svg";
import { useState } from "react";
import Slider from "./Swiper";

import image1 from "../../assets/images/Honeymoon-Places-in-December-in-India.jpg";
import image2 from "../../assets/images/family-travel.jpg";

function Home() {
   const [showMenue, setShowMenue] = useState(false);
   const [image, setImage] = useState(
      "../../assets/images/Honeymoon-Places-in-December-in-India.jpg"
   );

   const getActiveIndex = (image) => {
      setImage(image);
      console.log(image);
   };
   return (
      <section
         className={style.section}
         style={{
            backgroundImage: `url(${image === "image1" ? image1 : image2})`,
         }}
      >
         <nav className={style.navbar}>
            {" "}
            <div
               className={style.menue}
               onClick={() => setShowMenue(!showMenue)}
            >
               <img src={menueIcon} alt="" />
            </div>
            <ul className={showMenue ? style.showMenue : style.hideMenue}>
               <li className={style.language}>
                  <span></span> العربية
               </li>
               <li>تواصل معنا</li>
               <li>من نحن</li>
            </ul>
         </nav>
         <div className={style.sliderContainer}>
            <Slider getActiveIndex={getActiveIndex} />
         </div>
         <div className={style.logo}>
            <img src={logo} alt="" />
         </div>
      </section>
   );
}

export default Home;

//    <main className={style.mainImage}>

//             <h3>UNFORGETTABLE HONEYMOON</h3>
//          </main>
