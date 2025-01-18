import { JSX } from "react";
import styles from './IconButton.module.scss'

export default function IconButton({method, icon}:{method: Function, icon: JSX.Element}){
    return (
        <button 
            className={styles.button}
            onClick={() => method}>
            {icon}
        </button>
    );
}