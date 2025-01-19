import { useEffect, useRef, useState } from "react";
import CarouselButton from "../carousel/CarouselButton";
import ProductCard, { ProductProps } from "./ProductCard";
import styles from './ProductCarousel.module.scss';
import ProductModal from "./ProductModal";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export default function ProductCarousel() {

    const left: number = -1;
    const right: number = 1;
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const productRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/Products');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);


    const getGap = () => {
        if (containerRef.current) {
            const style = getComputedStyle(containerRef.current);
            const gap = parseFloat(style.gap || '0');
            return gap;
        }
        return 0;
    };

    const scroll = (direction: number) => {
        if (containerRef.current && productRef.current) {
            const productWidth = productRef.current.offsetWidth;
            const gap = getGap();
            containerRef.current.scrollBy({ left: direction * (productWidth + gap), behavior: 'smooth' });
        }
    };

    const openModal = (product: ProductProps) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };


    return (
        <section className={styles.carousel}>
            <CarouselButton method={() => scroll(left)} icon={<ArrowLeftIcon />} />
            <section className={styles.products} ref={containerRef}>
                {products.map((product, index) => (
                    <div key={index} ref={index === 0 ? productRef : null} onClick={() => openModal(product)}>
                        <ProductCard
                            productName={product.productName}
                            descriptionShort={product.descriptionShort}
                            photo={product.photo}
                            price={product.price}
                        />
                        {selectedProduct == product && (
                            <ProductModal isOpen={isModalOpen} onClose={closeModal} selectedProduct={product} />
                        )}
                    </div>

                ))}
            </section>
            <CarouselButton method={() => scroll(right)} icon={<ArrowRightIcon />} />

        </section>
    )
}