import AddTocard from "../AddTocard";
import Styles from "./ProductCarrd.module.css";

const ProductCard = () => {
  return (
    <div className={Styles.card}>
      <AddTocard />
    </div>
  );
};

export default ProductCard;
