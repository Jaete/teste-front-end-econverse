import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import CategoryCard from "@/components/categories/CategoryCard";
import { categoryCards } from "@/components/categories/Categories";

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
    </main>
  );
}
