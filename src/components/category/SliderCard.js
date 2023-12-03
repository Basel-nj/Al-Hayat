import style from "./category.module.css";

function SliderCard({ category }) {
   return (
      <div className={style.card}>
         <img src={category.image} alt="" />
         <p>{category.title}</p>
      </div>
   );
}

export default SliderCard;
