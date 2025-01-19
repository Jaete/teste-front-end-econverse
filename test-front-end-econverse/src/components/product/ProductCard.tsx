import { Currencies } from '@/data/Currencies';
import React, { Ref } from 'react';
import styles from './ProductCard.module.scss';
import { formatPrice } from '@/utils/NumberFormatter';
import BlockButton from '../buttons/BlockButton';

export interface ProductProps {
  productName: string,
  descriptionShort?: string,
  photo?: string,
  price?: number,
  cents?: number
}

const Product: React.FC<ProductProps> = ({ productName, descriptionShort, photo, price, cents }) => {
  return (
    <section className={styles.container}>
      <span className={styles.image}>{photo && <img src={photo} alt={productName} />}</span>
      <span className={styles.productInfo}>
        <span className={styles.productName}><h3>{productName}</h3></span>
        <span className={styles.promoPrice}>{Currencies.BRL} {formatPrice((price ?? 0) * 1.25, cents, 'pt-BR')}</span>
        <span className={styles.price}>{Currencies.BRL} {formatPrice(price ?? 0, cents, 'pt-BR')}</span>
        <span className={styles.installment}>ou 2x de {Currencies.BRL} {formatPrice((price ?? 0) / 2, (cents ?? 0) / 2, 'pt-BR')} sem juros</span>
        <span className={styles.freeShipment}>Frete grátis</span>
        <BlockButton text='COMPRAR' />
      </span>
      
    </section>
  );
};

export default Product;