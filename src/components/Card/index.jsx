import React from 'react';
import styles from '../Card/Card.module.scss';


const Card = (props) => {
  const { data: product, isLoading, isError } = props;
  if (isLoading) {
    return <h3 className={styles.loading}>Loading...</h3>;
  }

  if (isError) {
    return <h3 className={styles.error}>Error...</h3>;
  }

  return (
    <>
      {product && (
        <article key={product.id} className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.desc}>{product.description}</p>
          </div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.img}
          />
        </article>
      )}
    </>
  );
};

export default Card;
