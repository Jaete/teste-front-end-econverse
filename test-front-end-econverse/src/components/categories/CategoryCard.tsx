import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
    name?: string,
    propIcon?: React.ReactElement
}

export default function CategoryCard({name, propIcon}: CategoryCardProps){
    return (
        <button className={styles.cardButton}>
            <span className={styles.icon}>{propIcon}</span>
            <p>{name}</p>
        </button>
    );
}