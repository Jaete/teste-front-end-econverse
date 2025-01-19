"use client";

import { useEffect, useRef, useState } from 'react';
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import CategoryCard from "@/components/categories/CategoryCard";
import { categoryCards } from "@/components/categories/Categories";
import ProductCard from "@/components/product/ProductCard";
import styles from "./page.module.scss";
import ProductCarousel from '@/components/product/ProductCarousel';



export default function Home() {
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
      <span className={styles.carousel}>
        <ProductCarousel />
      </span>
        
    </main>
  );
}