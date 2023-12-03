import { Fragment } from "react";
import sectionImaeg from "../../assets/images/Asset 42.png";
import googleIcon from "../../assets/icons/svg/google-play-badge-logo.svg";
import appStore from "../../assets/icons/svg/app-store.svg";
import style from "./services.module.css";
import Card from "./Card";

function Services() {
   const cards = [
      {
         id: 1,
         title: "رحلات متنوعة ",
         description: "رحلات يومّية إلى مختلف المدن ...",
         image: require("../../assets/images/family-travel.jpg"),
      },
      {
         id: 2,
         title: "اختر مقعدك",
         description: "يمكنك اختيار مقعد جلوسك في الرحلة.",
         image: require("../../assets/images/family-travel.jpg"),
      },
      {
         id: 3,
         title: "توصيل مجاني",
         description: "  يمكنك طلب سيارة لتقلّك مجانا إلى نقطة الانطلاق",
         image: require("../../assets/images/family-travel.jpg"),
      },
   ];

   return (
      <Fragment>
         <section className={style.container}>
            <div className={style.imageContainer}>
               <img src={sectionImaeg} alt="" />
            </div>
            <div className={style.textContainer}>
               <h3>حمّل التطبيق</h3>
               <p>
                  أصبح حجز الرحلات أسهل وفي
                  <br />
                  ...متناول يدك
                  <br />
                  !حمل تطبيق الحياة للسياحة الآن
               </p>

               <div className={style.downloads}>
                  <img src={googleIcon} alt="" />
                  <img src={appStore} alt="" />
               </div>
            </div>
         </section>
         <section className={style.cardsContainer}>
            {cards.map((element) => {
               return <Card detailes={element} key={element.id} />;
            })}
         </section>
      </Fragment>
   );
}

export default Services;
