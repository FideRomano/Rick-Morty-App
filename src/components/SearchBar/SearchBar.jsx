import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={styles.search}>
         <input type='search' />
      <button className={styles.onclick} onClick={()=>{props.onSearch(55)}}>Agregar</button>
      </div>
   );
}
