import React from "react";
import styles from "./ProductsPage.module.css";
import productsData from "./products.json";
import { StringToHtml } from "../UI/StringToHtml/StringToHtml";

const ProductsPage = () => {
  console.log(productsData);

  return (
    <div className={styles.productsContainer}>
      {productsData.data.products.map((product) => (
        <div key={product.id} className={styles.product}>
          <img
            src={product.images[0]}
            alt={product.title.en}
            className={styles.productImage}
          />
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{product.title.en}</h2>
            <p className={styles.productBrand}>Brand: {product.brand_name}</p>
            <p className={styles.productPrice}>Price: ${product.price}</p>
            <p className={styles.productDescription}>
              Description:
              <StringToHtml data={product.description.en} />
            </p>
            {/* You can add more details here */}
            {/* For example, links to datasheets */}
            <div className={styles.documents}>
              {product.documents.map((document, index) => (
                <a
                  key={index}
                  href={document.en.file}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.documentLink}
                >
                  {document.en.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
