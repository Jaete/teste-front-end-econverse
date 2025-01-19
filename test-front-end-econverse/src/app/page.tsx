"use client";

import { useEffect, useRef, useState } from 'react';
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import CategoryCard from "@/components/categories/CategoryCard";
import { categoryCards } from "@/data/Categories";
import styles from "./page.module.scss";
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';
import PartnerCard from '@/components/partnerCard/PartnerCard';
import Brands from '@/components/brands/Brands';
import Footer from '@/components/footer/Footer';



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
      <section className={styles.relatedCategories}>
        <RelatedProducts />
      </section>
      <section className={styles.partnerCards}>
          <PartnerCard />
          <PartnerCard />
      </section>
      <section className={styles.browseByBrands}>
          <Brands />
      </section>
      <section className={styles.relatedCategories}>
        <RelatedProducts />
      </section>
      <Footer />
    </main>
  );
}