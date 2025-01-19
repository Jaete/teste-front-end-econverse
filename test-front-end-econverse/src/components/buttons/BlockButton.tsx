import styles from './BlockButton.module.scss'

interface BlockButtonProps {
    text: string,
    size: string
}

export default function BlockButton({text, size}: BlockButtonProps){
    return(
        <button className={styles.blockButton + " " + `${size}`}>
            {text}
        </button>
    );
}