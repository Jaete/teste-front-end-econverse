import About from '../about/About'
import AllRightsReserved from '../footerNote/FooterNote'
import NewsletterSubscribe from '../newsletterSubscribe/NewsletterSubscribe'
import styles from './Footer.module.scss'

export default function Footer(){
    return (
        <footer className={styles.container}>
            <NewsletterSubscribe />
            <About />
            <AllRightsReserved />
        </footer>
    )
}