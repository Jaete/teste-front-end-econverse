import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import styles from './SocialLinks.module.scss'

export default function SocialLinks(){
    return (
        <span className={styles.container}>
            <a><InstagramIcon /></a>
            <a><FacebookIcon /></a>
            <a><LinkedinIcon /></a>
        </span>
    )
}