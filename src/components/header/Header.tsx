import TextWithHighlight from "../textWithHighlight/TextWithHighlight";
import { CustomerBenefits } from "@/data/CustomerBenefits";
import TopMenu from "../topMenu/TopMenu";
import styles from './Header.module.scss';
import CategoriesComponent from "../categories/CategoriesComponent";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <section className={styles.customerBenefits}>
                {CustomerBenefits.map((item, index) => (
                    <TextWithHighlight
                        key={index}
                        normalText={item.normalText}
                        highlightText={item.highlightText}
                        highlightColor={item.highlightColor}
                        propIcon={item.propIcon}
                        reverse={item.reverse}
                    />
                ))}
            </section>
            <section className={styles.topMenu}>
                <TopMenu />
            </section>
            <section className={styles.categories}>
                <CategoriesComponent />
            </section>
        </header>
    );
}