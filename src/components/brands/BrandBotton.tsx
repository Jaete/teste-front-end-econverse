import { JSX } from 'react'
import styles from './BrandBotton.module.scss'

export default function BrandBotton({logo}:{logo: JSX.Element}){
    return (
        <span className={styles.container}>
            {logo}
        </span>
    )
}