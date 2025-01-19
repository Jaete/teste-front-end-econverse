import { CategoryTextList } from "../../data/Categories";
import styles from './CategoriesComponent.module.scss'
import Category from "./Category";

export default function CategoriesComponent() {
    return (
        <section className={styles.container}>
            {CategoryTextList.map((item, index) => (
                <Category
                    key={index}
                    name={item.name}
                    propIcon={item.propIcon}
                />
            ))}
        </section>
    )
}