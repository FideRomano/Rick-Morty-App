import styles from "./Card.module.css"

export default function Card({name, species, gender, image, onClose}) {
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.button}>X</button>
      <img src={image} alt=""/>
      <h2>{name}</h2>
      <h2>Especie: {species}</h2>
      <h2>Genero: {gender}</h2>
      
    </div>
  );
}
