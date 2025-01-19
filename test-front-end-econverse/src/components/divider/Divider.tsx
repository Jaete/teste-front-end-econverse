import styles from './Divider.module.scss'

export default function Divider({text}: {text: string}){
    return (
        <span className={styles.container}>
            <hr className={styles.line}/>
            {text}
            <hr className={styles.line}/>
        </span>
    )
}