import styles from './Divider.module.scss'

export default function Divider({text, lines}: {text: string, lines: boolean}){
    return (
        <span className={styles.container}>
            {lines && <hr className={styles.line}/>}
            {text}
            {lines && <hr className={styles.line}/>}
        </span>
    )
}