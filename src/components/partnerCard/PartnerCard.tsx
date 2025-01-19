import BlockButton from '../buttons/BlockButton'
import styles from './PartnerCard.module.scss'

export default function PartnerCard(){
    return (
        <span className={styles.container}>
            <span className={styles.content}>
                <h3>Parceiros</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <BlockButton text='CONFIRA'/>
            </span>
        </span>
    )
}