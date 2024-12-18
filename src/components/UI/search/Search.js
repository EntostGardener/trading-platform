import styles from "./Search.module.css";
import Button from "../button/Button";

export default function Search({type}) {
  return (
    <>
      {type === "search01" && (
        <div className={styles.searchWrapper}>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              placeholder="search"
              type="text"
            />
            <Button type="search" />
          </div>
          {/* <div className={styles.searchedProducts}>
            <div className={styles.searchedProductItem}></div>
          </div> */}
        </div>
      )}
    </>
  );
}
