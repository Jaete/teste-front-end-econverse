import { Categories } from "./Categories";
import Category from "./Category";
import styles from './CategoriesComponent.module.scss'
import CrownIcon from "../icons/CrownIcon";

export default function CategoriesComponent(){
    return (
        <section className={styles.container}>
            <Category name={Categories.all} />
            <Category name={Categories.supermarket} />
            <Category name={Categories.books} />
            <Category name={Categories.fashion} />
            <Category name={Categories.launches} />
            <Category name={Categories.dailyOffers} />
            <Category name={Categories.membership} propIcon={<CrownIcon />} />
        </section>
    )
}