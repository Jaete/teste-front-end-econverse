import styles from "./page.module.scss";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import CategoryCard from "@/components/categories/CategoryCard";
import TechIcon from "@/components/icons/TechIcon";
import MarketIcon from "@/components/icons/MarketIcon";
import WhiskeyIcon from "@/components/icons/WhiskeyIcon";
import ToolIcon from "@/components/icons/ToolIcon";
import HealthIcon from "@/components/icons/HeathIcon";
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
