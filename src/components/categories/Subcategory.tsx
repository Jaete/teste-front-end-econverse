import styles from './Subcategory.module.scss'

export default function Subcategory({text} : {text: string}){
    return (
        <button className={styles.subcategoryButton}>
            {text}
        </button>
    )
}