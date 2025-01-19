"use client";

import { useEffect, useRef, useState } from 'react';
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import CategoryCard from "@/components/categories/CategoryCard";
import { categoryCards } from "@/data/Categories";
import ProductCard from "@/components/product/ProductCard";
import styles from "./page.module.scss";
import ProductCarousel from '@/components/product/ProductCarousel';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';
import PartnerCard from '@/components/partnerCard/PartnerCard';



export default function Home() {

  {/* Funcionalidade para fazer sentido com os cards de categoria (Tecnologia, Supermercado, etc) */ }
  const [currentCategory, setCurrentCategory] = useState("Tecnologia");

  return (
    <main>
      <Header />
      <Hero />
      <section className={styles.categoryCards}>
        {categoryCards.map((item, index) => (
          <CategoryCard
            key={index}
            name={item.name}
            propIcon={item.propIcon}
            method={() => setCurrentCategory(item.name)}
          />
        ))}
      </section>
      <section className={styles.relatedCategories}>
        <RelatedProducts category={currentCategory} />
      </section>
      <section className={styles.partnerCards}>
          <PartnerCard />
          <PartnerCard />
      </section>
    </main>
  );
}