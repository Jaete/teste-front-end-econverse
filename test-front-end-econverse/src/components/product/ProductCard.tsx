import { Currencies } from '@/data/Currencies';
import React, { Ref } from 'react';
import styles from './ProductCard.module.scss';

export interface ProductProps {
    productName: string,
    descriptionShort?: string,
    photo?: string,
    price?: number,
    cents?: number
}

const Product: React.FC<ProductProps> = ({ productName, descriptionShort, photo, price, cents}) => {
    return (
        <section className={styles.container}>
          <span className={styles.image}>{photo && <img src={photo} alt={productName} />}</span>
          <span className={styles.productName}><h3>{productName}</h3></span>
          <span className={styles.price}>{price && <p>{Currencies.BRL} {price}{cents ?? ',00'}</p>}</span>
        </section>
      );
};

export default Product;