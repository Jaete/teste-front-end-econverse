import React, { useState } from 'react';
import styles from './ProductModal.module.scss';
import { ProductProps } from './ProductCard';
import CloseIcon from '../icons/CloseIcon';
import { Currencies } from '@/data/Currencies';
import IncrementalButton from '../buttons/IncrementalButton';
import BlockButton from '../buttons/BlockButton';
import { formatPrice } from '@/utils/NumberFormatter';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedProduct: ProductProps;
}

const ProductModal: React.FC<ModalProps> = ({ isOpen, onClose, selectedProduct }) => {
    const [productCount, setProductCount] = useState(0);

    if (!isOpen) return null;
    const onPlus = () => {
        setProductCount(currentCount => currentCount + 1);
    }

    const onMinus = () => {
        if((productCount - 1) < 0){
            return;
        }
        setProductCount(currentCount => currentCount - 1);
    }

    return (
        <section className={styles.modalOverlay} onClick={onClose}>
            <main className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}><CloseIcon /></button>
                <span className={styles.productImage}>
                    {selectedProduct.photo && <img src={selectedProduct.photo} alt={selectedProduct.productName} />}
                </span>
                <aside className={styles.productData}>
                    <span className={styles.productInfo}>
                        <h2 className={styles.productName}>{selectedProduct.productName}</h2>
                        <p className={styles.price}>{Currencies.BRL} {formatPrice(selectedProduct.price ?? 0, selectedProduct.cents, 'pt-BR')}</p>
                    </span>
                    <span className={styles.descriptionShort}>
                        <p>{selectedProduct.descriptionShort}</p>
                        <a className={styles.link}>Veja mais detalhes do produto &gt;</a>
                    </span>
                    <span className={styles.buyMenu}>
                        <IncrementalButton count={productCount} plus={onPlus} minus={onMinus}/>
                        <BlockButton text='COMPRAR'/>
                    </span>
                </aside>
            </main>
        </section>
    );
};

export default ProductModal;