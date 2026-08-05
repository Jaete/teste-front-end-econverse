import React, { useEffect, useRef, useState } from 'react';
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
    onExited?: () => void;
    selectedProduct: ProductProps;
}

const ANIMATION_DURATION = 300;

const ProductModal: React.FC<ModalProps> = ({ isOpen, onClose, onExited, selectedProduct }) => {
    const [productCount, setProductCount] = useState(0);
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [animateIn, setAnimateIn] = useState(false);
    const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        let rafId1: number, rafId2: number;

        if (isOpen) {
            setShouldRender(true);
            rafId1 = requestAnimationFrame(() => {
                rafId2 = requestAnimationFrame(() => setAnimateIn(true));
            });
        } else {
            setAnimateIn(false);
            if (shouldRender) {
                exitTimeoutRef.current = setTimeout(() => {
                    setShouldRender(false);
                    onExited?.();
                }, ANIMATION_DURATION);
            }
        }

        return () => {
            cancelAnimationFrame(rafId1);
            cancelAnimationFrame(rafId2);
            clearTimeout(exitTimeoutRef.current);
        };
    }, [isOpen]);

    if (!shouldRender) return null;

    const onPlus = () => {
        setProductCount(currentCount => currentCount + 1);
    }

    const onMinus = () => {
        if((productCount - 1) < 0){
            return;
        }
        setProductCount(currentCount => currentCount - 1);
    }

    const stateClass = animateIn ? styles.open : styles.closing;

    return (
        <section className={`${styles.modalOverlay} ${stateClass}`} onClick={onClose}>
            <main className={`${styles.modalContent} ${stateClass}`} onClick={(e) => e.stopPropagation()}>
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
