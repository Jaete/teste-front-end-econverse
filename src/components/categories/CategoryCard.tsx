import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
    name?: string,
    propIcon?: React.ReactElement,
    method: Function
}

export default function CategoryCard({name, propIcon, method}: CategoryCardProps){
    return (
        <button className={styles.cardButton} onClick={() => method()}>
            <span className={styles.icon}>{propIcon}</span>
            <p>{name}</p>
        </button>
    );
}