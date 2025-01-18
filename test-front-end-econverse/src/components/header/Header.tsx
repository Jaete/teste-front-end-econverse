import TextWithHighlight from "../textWithHighlight/TextWithHighlight";
import { CustomerBenefitsHighlightColor, CustomerBenefitsText } from "@/data/CustomerBenefits";
import TopMenu from "../topMenu/TopMenu";
import styles from './Header.module.scss';
import CategoriesComponent from "../categories/CategoriesComponent";
import CardIcon from "../icons/CardIcon";
import TruckIcon from "../icons/TruckIcon";
import ShieldIcon from "../icons/ShieldIcon";

export default function Header () {
    return (
        <header className={styles.headerContainer}>
            <section className={styles.customerBenefits}>
                <TextWithHighlight 
                    normalText={CustomerBenefitsText.Normal.safeBuy}
                    highlightText={CustomerBenefitsText.Highlight.safeBuy}
                    highlightColor={CustomerBenefitsHighlightColor}
                    propIcon={<ShieldIcon />}
                    reverse={false}
                />
                <TextWithHighlight 
                    normalText={CustomerBenefitsText.Normal.freeDeliver} 
                    highlightText={CustomerBenefitsText.Highlight.freeDeliver}
                    highlightColor={CustomerBenefitsHighlightColor}
                    propIcon={<TruckIcon />}
                    reverse={true}
                />
                <TextWithHighlight 
                    normalText={CustomerBenefitsText.Normal.installments} 
                    highlightText={CustomerBenefitsText.Highlight.installments}
                    highlightColor={CustomerBenefitsHighlightColor}
                    propIcon={<CardIcon />}
                    reverse={true}
                />
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