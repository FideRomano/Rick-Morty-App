import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className={styles.card}>
      <div className={styles.forButton}>
        <button onClick={onClose} className={styles.button}>
        X
      </button>
      </div>
      
      <div className={styles.caja}>
        <img src={image} alt="" />
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.data}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}
