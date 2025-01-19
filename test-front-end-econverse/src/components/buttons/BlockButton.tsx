import styles from './BlockButton.module.scss'

interface BlockButtonProps {
    text: string,
}

export default function BlockButton({text}: BlockButtonProps){
    return(
        <button className={styles.blockButton}>
            {text}
        </button>
    );
}