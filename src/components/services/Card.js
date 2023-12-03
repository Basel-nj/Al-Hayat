import style from "./services.module.css";

function Card({ detailes }) {
   return (
      <div className={style.card}>
         <div className={style.imageContainer}>
            <img src={detailes.image} alt="" />
         </div>
         <h2>{detailes.title}</h2>
         <p>{detailes.description}</p>
      </div>
   );
}

export default Card;
