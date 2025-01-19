import { JSX } from 'react';
import styles from './CategoriesComponent.module.scss'

interface CategoryProps {
    name: string,
    propIcon?: JSX.Element,
}

export default function Category({ name, propIcon }: CategoryProps) {

    return (
        <span className={styles.category}>
            {propIcon}
            {name}
        </span>
    );
}