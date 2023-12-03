import style from "./home.module.css";
import logo from "../../assets/icons/svg/logoo.svg";
import menueIcon from "../../assets/icons/svg/burger-menu-svgrepo-com.svg";
import { useState } from "react";
import Slider from "./Swiper";

function Home() {
   const [showMenue, setShowMenue] = useState(false);

   return (
      <section className={style.section}>
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
            <Slider />
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
