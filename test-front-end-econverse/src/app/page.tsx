"use client";

import { useEffect, useState } from 'react';
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import CategoryCard from "@/components/categories/CategoryCard";
import { categoryCards } from "@/components/categories/Categories";
import ProductCard from "@/components/product/ProductCard";
import styles from "./page.module.scss";

interface Product {
  productName: string;
  descriptionShort?: string;
  photo?: string;
  price?: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <main>
      <Header />
      <Hero />
      <span className={styles.categoryCards}>
        {categoryCards.map((item, index) => (
          <CategoryCard
            key={index}
            name={item.name}
            propIcon={item.propIcon}
          />
        ))}
      </span>
      <section className={styles.products}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.productName}
            descriptionShort={product.descriptionShort}
            photo={product.photo}
            price={product.price}
          />
        ))}
      </section>
    </main>
  );
}